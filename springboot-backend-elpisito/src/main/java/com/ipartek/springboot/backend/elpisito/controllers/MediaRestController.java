package com.ipartek.springboot.backend.elpisito.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ipartek.springboot.backend.elpisito.storage.IStorageService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/media")
public class MediaRestController {
	private final IStorageService storageService;
	
	private final HttpServletRequest request;
	
	@CrossOrigin(origins= {"http://localhost:4200"})
	@PostMapping("/upload/{idInmueble}")
	public Map<String, String> uploadFile(@RequestParam("file") MultipartFile multipartFile, @PathVariable Long idInmueble) {
		String path = storageService.store(multipartFile, idInmueble);
		
		String host = request.getRequestURL().toString().replace(request.getRequestURI(), "");
		
		String url = ServletUriComponentsBuilder.fromHttpUrl(host).path("/media/file/").path(path).toUriString();
		
		return Map.of("url", url);
	}
	
	@CrossOrigin(origins= {"http://localhost:4200"})
	@GetMapping("/file/{filename:.+}")
	public ResponseEntity<Resource> getFile(@PathVariable String filename) throws IOException {
		Resource file = storageService.loadAsResource(filename);
		
		String contentType = Files.probeContentType(file.getFile().toPath());
		
		return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, contentType).body(file);
	}
}

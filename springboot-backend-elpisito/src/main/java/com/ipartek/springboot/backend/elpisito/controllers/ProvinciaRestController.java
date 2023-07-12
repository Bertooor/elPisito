package com.ipartek.springboot.backend.elpisito.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ipartek.springboot.backend.elpisito.models.entity.Provincia;
import com.ipartek.springboot.backend.elpisito.models.services.IProvinciaService;

@RestController
@RequestMapping("/api")
public class ProvinciaRestController {

	@Autowired
	private IProvinciaService provinciaService;
	
	@GetMapping("/provincias")
	public List<Provincia> findAll(){
		return provinciaService.findAll();
	};
	
	@GetMapping("/provincia/{id}")
	public Provincia findById(@PathVariable Long id) {
		return provinciaService.findById(id);
	}
	
	@PostMapping("/provincia")
	public Provincia create(@RequestBody Provincia provincia) {
		return provinciaService.save(provincia);
	}
	
	@PutMapping("/provincia")
	public Provincia update(@RequestBody Provincia provincia) {
		return provinciaService.save(provincia);
	}
	
	@DeleteMapping("/provincia/{id}")
	public void delete(@PathVariable Long id) {
		provinciaService.deleteById(id);
	}
}
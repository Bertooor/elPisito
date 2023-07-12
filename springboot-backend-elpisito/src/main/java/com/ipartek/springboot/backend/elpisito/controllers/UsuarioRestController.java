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

import com.ipartek.springboot.backend.elpisito.models.entity.Usuario;
import com.ipartek.springboot.backend.elpisito.models.services.IUsuarioService;

@RestController
@RequestMapping("/api")
public class UsuarioRestController {

	@Autowired
	private IUsuarioService usuarioService;
	
	@GetMapping("/usuarios")
	List<Usuario> findAll(){
		return usuarioService.findAll();
	};
	
	@GetMapping("/usuario/{id}")
	public Usuario findById(@PathVariable Long id) {
		return usuarioService.findById(id);
	}
	
	@PostMapping("/usuario")
	public Usuario create(@RequestBody Usuario usuario) {
		return usuarioService.save(usuario);
	}
	
	@PutMapping("/usuario")
	public Usuario update(@RequestBody Usuario usuario) {
		return usuarioService.save(usuario);
	}
	
	@DeleteMapping("/usuario/{id}")
	public void delete(@PathVariable Long id) {
		usuarioService.deleteById(id);
	}
}

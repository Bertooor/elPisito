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

import com.ipartek.springboot.backend.elpisito.models.entity.Poblacion;
import com.ipartek.springboot.backend.elpisito.models.services.IPoblacionService;

@RestController
@RequestMapping("/api")
public class PoblacionRestController {
	
	@Autowired
	private IPoblacionService poblacionService;
	
	@GetMapping("/poblaciones")
	public List<Poblacion> findAll(){
		return poblacionService.findAll();
	};
	
	@GetMapping("/poblacion/{id}")
	public Poblacion findById(@PathVariable Long id) {
		return poblacionService.findById(id);
	}
	
	@PostMapping("/poblacion")
	public Poblacion create(@RequestBody Poblacion poblacion) {
		return poblacionService.save(poblacion);
	}
	
	@PutMapping("/poblacion")
	public Poblacion update(@RequestBody Poblacion poblacion) {
		return poblacionService.save(poblacion);
	}
	
	@DeleteMapping("/poblacion/{id}")
	public void delete(@PathVariable Long id) {
		poblacionService.deleteById(id);
	}
}

package com.ipartek.springboot.backend.elpisito.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<?> findAll() {

		Map<String, Object> response = new HashMap<>();

		List<Usuario> resultado = null;

		try {

			resultado = usuarioService.findAll();
		} catch (DataAccessException e) {

			response.put("mensaje", "Error al realizar la petición en la BBDD");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<List<Usuario>>(resultado, HttpStatus.OK);
	};

	@GetMapping("/usuario/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id) {

		Usuario usuario = null;
		Map<String, Object> response = new HashMap<>();

		try {

			usuario = usuarioService.findById(id);
		} catch (DataAccessException e) {

			response.put("mensaje", "Error al realizar la consulta en la BBDD");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		if (usuario == null) {
			response.put("mensaje", "El usuario ID: " + id.toString() + " no existe en la BBDD");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
	}

	@PostMapping("/usuario")
	public ResponseEntity<?> create(@RequestBody Usuario usuario) {

		Usuario usuarioNew = null;
		Map<String, Object> response = new HashMap<>();

		try {

			usuarioNew = usuarioService.save(usuario);

		} catch (DataAccessException e) {

			response.put("mensaje", "Error al crear un usuario en la BBDD");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El Usuario " + usuarioNew.getId() + " ha sido creado con éxito");
		response.put("usuario", usuarioNew);
		return new ResponseEntity<Usuario>(usuarioNew, HttpStatus.CREATED);
	}

	@PutMapping("/usuario")
	public ResponseEntity<?> update(@RequestBody Usuario usuario) {

		Long id = usuario.getId();
		Usuario usuarioActual = usuarioService.findById(id);

		Usuario usuarioUpdated = null;

		Map<String, Object> response = new HashMap<>();

		if (usuarioActual == null) {
			response.put("mensaje", "Error: no se pudo editar el usuario con Id: "
					.concat(id.toString().concat(" no existe en la BBDD")));

			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}

		try {
			usuarioUpdated = usuarioService.save(usuario);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al actualizar el usuario en la BBDD");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El usuario ha sido actualizado con éxito");
		response.put("usuario", usuarioUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	@DeleteMapping("/usuario/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {

		Map<String, Object> response = new HashMap<>();

		try {
			usuarioService.deleteById(id);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al elimimar el usuario de la BBDD");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El usuario ha sido eliminado con éxito de la BBDD");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}
}

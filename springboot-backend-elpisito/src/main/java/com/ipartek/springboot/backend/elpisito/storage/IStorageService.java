package com.ipartek.springboot.backend.elpisito.storage;

import java.io.IOException;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface IStorageService {
	void init() throws IOException; // Método para subida de archivos

	String store(MultipartFile file, Long idInmueble); // Método para almacenar los archivos

	Resource loadAsResource(String filename);
}

package com.ipartek.springboot.backend.elpisito.storage;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ipartek.springboot.backend.elpisito.models.dao.IImagenDAO;
import com.ipartek.springboot.backend.elpisito.models.entity.Imagen;
import com.ipartek.springboot.backend.elpisito.models.entity.Inmueble;

import jakarta.annotation.PostConstruct;

@Service
public class StorageServiceImpl implements IStorageService {

	@Autowired
	private IImagenDAO imagenDAO;

	@Value("${media.location}")
	private String mediaLocation;

	private Path rootLocation;

	@Override
	@PostConstruct // Permite que se ejecute este método al crear una instancia de la clase
	public void init() throws IOException {
		rootLocation = Paths.get(mediaLocation);
		Files.createDirectories(rootLocation);
	}

	@Override
	public String store(MultipartFile file, Long idInmueble) {

		try {

			if (file.isEmpty()) {
				throw new RuntimeException("No se puede almacenar un archivo vacío");
			}

			String fileContentType = file.getContentType();

			String tipo = "." + fileContentType.substring(fileContentType.lastIndexOf("/") + 1);

			if (tipo.equals(".jpeg")) {
				tipo = ".jpg";
			}

			String filename = String.valueOf(Calendar.getInstance().getTimeInMillis());
			filename = filename.concat(tipo);

			Path destinationFile = rootLocation.resolve(Paths.get(filename));

			try (InputStream inputStream = file.getInputStream()) {

				Files.copy(inputStream, destinationFile, StandardCopyOption.REPLACE_EXISTING);
			}

			Imagen imagen = new Imagen();
			Inmueble inmueble = new Inmueble();
			inmueble.setId(idInmueble);
			imagen.setNombre(filename);
			imagen.setInmueble(inmueble);
			imagenDAO.save(imagen);

			return filename;

		} catch (IOException e) {
			throw new RuntimeException("Fallo al almacenar el archivo");
		}

	}

	@Override
	public Resource loadAsResource(String filename) {
		Path file = rootLocation.resolve(Paths.get(filename));

		try {
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource;
			} else {
				throw new RuntimeException("No se puede leer el archivo" + filename);
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("No se puede leer el archivo" + filename);
		}

	}

}

package com.ipartek.springboot.backend.elpisito.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ipartek.springboot.backend.elpisito.models.dao.IUsuarioDAO;

@Service
public class JWTUserDetailsService implements UserDetailsService{
	
	@Autowired
	private IUsuarioDAO usuarioDAO;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return usuarioDAO.findOneByEmail(username).map(usuario -> {
			var authorities = List.of(new SimpleGrantedAuthority(usuario.getRol()));
			return new User(usuario.getEmail(), usuario.getPassword(), authorities);
		}).orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado en la base de datos"));
	}

}
 
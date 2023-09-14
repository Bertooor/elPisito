package com.ipartek.springboot.backend.elpisito.security;

import java.io.IOException;
import java.util.Objects;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class JWTValidationFilter extends OncePerRequestFilter {
	
	private final JWTService jwtService;
	private final JWTUserDetailsService jwtUserDetailsService;
	private static final String AUTHORIZATION_HEADER = "Authorization";
	private static final String AUTHORIZATION_HEADER_BEARER = "Bearer ";

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final var requestTokenHeader = request.getHeader(AUTHORIZATION_HEADER);
		String username = null;
		String jwt = null;
		
		if (Objects.nonNull(requestTokenHeader) && requestTokenHeader.startsWith(AUTHORIZATION_HEADER_BEARER)) {
			jwt = requestTokenHeader.substring(7);
			
			try {
				username = jwtService.getUsernameFromToken(jwt);
			} catch(IllegalArgumentException e) {
				
			} catch(ExpiredJwtException e) {
				
			}
		}
		
	}
 
}

//package com.ipartek.springboot.backend.elpisito.security;
//
//import java.io.IOException;
//import java.util.HashMap;
//import java.util.Map;
//
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
//
//	@Override
//	protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
//			AuthenticationException failed) throws IOException, ServletException {
//		
//			Map<String, Object> body = new HashMap<>();
//			
//			body.put("mensaje", "Error de autenticación: username y/o password incorrectos");
//			body.put("error", failed.getMessage());
//			
//			response.getWriter().flush();
//			response.setStatus(401);
//			response.setContentType("application/json");
//			
//		super.unsuccessfulAuthentication(request, response, failed);
//	}
//
//	@Override
//	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
//			Authentication authResult) throws IOException, ServletException {
//		// TODO Auto-generated method stub
//		super.successfulAuthentication(request, response, chain, authResult);
//	}
//
//	@Override
//	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
//			throws AuthenticationException {
//		// TODO Auto-generated method stub
//		return super.attemptAuthentication(request, response);
//	}
//
//}

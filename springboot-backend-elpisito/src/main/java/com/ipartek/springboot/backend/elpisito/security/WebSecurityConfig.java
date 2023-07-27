//package com.ipartek.springboot.backend.elpisito.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration 
//public class WebSecurityConfig {
//	
//	@Bean
//	SecurityFilterChain filterChain(HttpSecurity http, AuthenticationManager authManager) throws Exception{
//		http.csrf().disable().authorizeRequests().requestMatchers("/media/file/**").permitAll().build();
//	}
//	
//	@Bean
//	AuthenticationManager authManager(HttpSecurity http) throws Exception {
//		return http.getSharedObject(AuthenticationManagerBuilder.class).userDetailsService(userDetailsD)
//	}
//
//}

package com.ipartek.springboot.backend.elpisito.security;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Collections;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTService {
	public static final long JWT_TOKEN_VALIDITY = 1200;
	public static final String JWT_SECRET = "InhsirnhkI_/dksj*498vnmI";
	
	private Claims getAllClaimsFromToken(String token) {
		final Key key = Keys.hmacShaKeyFor(JWT_SECRET.getBytes(StandardCharsets.UTF_8));
		
		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
	}
	
	public<T> T getClaimsFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = this.getAllClaimsFromToken(token);
		
		return claimsResolver.apply(claims);
	}
	
	private Date getExpirationDateFromToken(String token) {
		return this.getClaimsFromToken(token, Claims::getExpiration);
	}
	
	private boolean isTokenExpired(String token) {
		final Date expirationDate = this.getExpirationDateFromToken(token);
		
		return expirationDate.before(new Date());
	}
	
	public String getUsernameFromToken(String token) {
		return this.getClaimsFromToken(token, Claims::getSubject);
	}
	
	public boolean validateToken(String token, UserDetails userDetails) {
		final String usernameFromUserDetails = userDetails.getUsername();
		
		final String usernameFromJWT = this.getUsernameFromToken(token);
		
		return usernameFromUserDetails.equals(usernameFromJWT) && !this.isTokenExpired(token);
	}
	
	private String getToken(Map<String, Object> claims, String subject) {
		final Key key = Keys.hmacShaKeyFor(JWT_SECRET.getBytes(StandardCharsets.UTF_8));
		
		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis())).setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000)).signWith(key).compact();
	}
	
	public String generateToken(UserDetails userDetails) {
		final Map<String, Object> claims = Collections.singletonMap("ROLES", userDetails.getAuthorities().toString());
		
		return this.getToken(claims, userDetails.getUsername());
	}
}
package com.project.grouby.jwt;

import java.util.Date;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.project.grouby.dto.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtService {
	private String secretKey = "grouby_key";
	private Long expireTime = 1000L * 60 * 60; // 1½Ã°£
	
	public String createUserToken(User user) {
		return Jwts.builder()
				   .setHeaderParam("typ", "JWT")
				   .setSubject("userToken")
				   .setExpiration(new Date(System.currentTimeMillis() + expireTime))
				   .claim("user", user)
				   .signWith(SignatureAlgorithm.HS256, secretKey.getBytes())
				   .compact();
	}
	
	public Map<String, Object> getUser(String token) {
		Jws<Claims> claims = null;
		try {
			claims = Jwts.parser()
						 .setSigningKey(secretKey.getBytes())
						 .parseClaimsJws(token);
		} catch(Exception e) {
			throw new RuntimeException();
		}
		
		return claims.getBody();
	}
	
	public void checkValid(String token) {
		Jwts.parser()
			.setSigningKey(secretKey.getBytes())
			.parseClaimsJws(token);
	}
}

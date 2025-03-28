package com.travelfree.freeitinerary.services;

import com.travelfree.freeitinerary.entities.User;
import com.travelfree.freeitinerary.repository.UserRepository;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.security.auth.login.LoginException;
import java.security.Key;
import java.util.Date;

@Service
public class AuthService {

    private final Key SECRET_KEY;

    @Autowired
    public AuthService( @Value("${jwt.secret}")String secretKey){
        this.SECRET_KEY = Keys.hmacShaKeyFor(secretKey.getBytes());
    }


    public String generateToken(User user) {
        return Jwts.builder().setSubject(user.getEmail()).setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis()+3600000)).signWith(SECRET_KEY).compact();
    }

    @Autowired
    private UserRepository userRepository;

    public String login(String email, String rawPassword) throws Exception{
        User user = userRepository.findByEmail(email).orElseThrow(()->new com.travelfree.freeitinerary.exception.LoginException("Utente non trovato"));

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (!encoder.matches(rawPassword, user.getPassword())){
            throw new LoginException("Password errata");
        }

        return generateToken(user);
    }
}

package com.travelfree.freeitinerary.dto.LoginResponse;

public class LoginResponseDTO {
    private String token;

    public LoginResponseDTO(String token){
        this.token= token;
    }

    public String getToken() {
        return token;
    }
}

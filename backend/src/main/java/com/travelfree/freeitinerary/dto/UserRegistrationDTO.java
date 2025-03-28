package com.travelfree.freeitinerary.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class UserRegistrationDTO {
    @NotBlank(message = "Email obbligatoria")
    @Email(message = "Email non valida")
    private String email;

    @NotBlank(message = "Password obbligatoria")
    @Size(min = 8, message = "La password deve contenere almeno 8 caratteri")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[@#$%^+&=!]).*$",
            message = "La password deve contenere almeno una lettera maiuscola ed un carattere speciale")
    private String password;

   /*@NotBlank(message = "Conferma la password")
    private String confermaPassword;*/

    public UserRegistrationDTO(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

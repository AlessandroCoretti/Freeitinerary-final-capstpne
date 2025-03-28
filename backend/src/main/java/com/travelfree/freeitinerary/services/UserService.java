package com.travelfree.freeitinerary.services;

import com.travelfree.freeitinerary.dto.UserRegistrationDTO;
import com.travelfree.freeitinerary.entities.User;
import com.travelfree.freeitinerary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private EmailService emailService;

    public User createUser(UserRegistrationDTO userRegistrationDTO) {
        if (userRepository.findByEmail(userRegistrationDTO.getEmail()).isPresent()){
            throw new IllegalArgumentException("Email già registrata");
        }
        User u1 = new User();
        u1.setEmail(userRegistrationDTO.getEmail());
        u1.setPassword(bCryptPasswordEncoder.encode(userRegistrationDTO.getPassword()));

        emailService.sendEmail(
                u1.getEmail(),
                "Grazie per esserti registrato: comincia a pianificare la tua prossima avventura!!!",
                "Benvenuto sul sito di Freeitinerary");
        return userRepository.save(u1);
    }
}

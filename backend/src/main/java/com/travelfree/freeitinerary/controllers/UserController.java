package com.travelfree.freeitinerary.controllers;

import com.travelfree.freeitinerary.dto.UserRegistrationDTO;
import com.travelfree.freeitinerary.entities.User;
import com.travelfree.freeitinerary.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public User createUser(@RequestBody UserRegistrationDTO userRegistrationDTO){
        return userService.createUser(userRegistrationDTO);
    }
}

package com.travelfree.freeitinerary;

import com.travelfree.freeitinerary.entities.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FreeitineraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(FreeitineraryApplication.class, args);
	}

}

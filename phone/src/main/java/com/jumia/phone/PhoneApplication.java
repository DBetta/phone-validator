package com.jumia.phone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class PhoneApplication {

    public static void main(String[] args) {
        SpringApplication.run(PhoneApplication.class, args);
    }

}

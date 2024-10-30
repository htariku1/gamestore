// src/main/java/com/company/gamestore/controller/AuthenticationController.java

package com.company.gamestore.controller;

import com.company.gamestore.model.User;
import com.company.gamestore.service.UserService;
import com.company.gamestore.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.Set;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody @Valid User loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
            User user = userService.findByUsername(loginRequest.getUsername());
            return jwtUtil.generateJwtToken(user);
        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public User register(@RequestBody @Valid User user) {
        // Set default role to "USER"
        user.setRoles(Set.of("USER"));
        return userService.registerUser(user);
    }
}

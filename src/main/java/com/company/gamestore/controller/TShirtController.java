package com.company.gamestore.controller;

import com.company.gamestore.model.TShirt;
import com.company.gamestore.service.TShirtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/tshirts")
public class TShirtController {

    @Autowired
    private TShirtService tshirtService;

    @PostMapping
    public ResponseEntity<TShirt> createTShirt(@RequestBody @Valid TShirt tshirt) {
        return ResponseEntity.ok(tshirtService.createTShirt(tshirt));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TShirt> getTShirtById(@PathVariable int id) {
        return ResponseEntity.ok(tshirtService.getTShirtById(id));
    }

    @GetMapping
    public ResponseEntity<List<TShirt>> getAllTShirts() {
        return ResponseEntity.ok(tshirtService.getAllTShirts());
    }

    @GetMapping("/color/{color}")
    public ResponseEntity<List<TShirt>> getTShirtsByColor(@PathVariable String color) {
        return ResponseEntity.ok(tshirtService.getTShirtsByColor(color));
    }

    @GetMapping("/size/{size}")
    public ResponseEntity<List<TShirt>> getTShirtsBySize(@PathVariable String size) {
        return ResponseEntity.ok(tshirtService.getTShirtsBySize(size));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTShirt(@PathVariable int id) {
        tshirtService.deleteTShirt(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<TShirt> updateTShirt(@PathVariable int id, @RequestBody @Valid TShirt tshirt) {
        return ResponseEntity.ok(tshirtService.updateTShirt(id, tshirt));
    }
}

package com.company.gamestore.controller;

import com.company.gamestore.model.Console;
import com.company.gamestore.service.ConsoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/consoles")
public class ConsoleController {

    @Autowired
    private ConsoleService consoleService;

    @PostMapping
    public ResponseEntity<Console> createConsole(@RequestBody @Valid Console console) {
        return ResponseEntity.ok(consoleService.createConsole(console));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Console> getConsoleById(@PathVariable int id) {
        return ResponseEntity.ok(consoleService.getConsoleById(id));
    }

    @GetMapping
    public ResponseEntity<List<Console>> getAllConsoles() {
        return ResponseEntity.ok(consoleService.getAllConsoles());
    }

    @GetMapping("/manufacturer/{manufacturer}")
    public ResponseEntity<List<Console>> getConsolesByManufacturer(@PathVariable String manufacturer) {
        return ResponseEntity.ok(consoleService.getConsolesByManufacturer(manufacturer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConsole(@PathVariable int id) {
        consoleService.deleteConsole(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Console> updateConsole(@PathVariable int id, @RequestBody @Valid Console console) {
        return ResponseEntity.ok(consoleService.updateConsole(id, console));
    }

    @GetMapping("/category/{category}")
    public List<Console> getConsolesByCategory(@PathVariable String category) {
        return consoleService.getConsolesByCategory(category);
    }
}

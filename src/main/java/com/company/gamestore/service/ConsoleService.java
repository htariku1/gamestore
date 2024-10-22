package com.company.gamestore.service;

import com.company.gamestore.model.Console;
import com.company.gamestore.repository.ConsoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsoleService {

    @Autowired
    private ConsoleRepository consoleRepository;

    public Console createConsole(Console console) {
        return consoleRepository.save(console);
    }

    public Console getConsoleById(int id) {
        return consoleRepository.findById(id).orElse(null);
    }

    public List<Console> getAllConsoles() {
        return consoleRepository.findAll();
    }

    public List<Console> getConsolesByManufacturer(String manufacturer) {
        return consoleRepository.findByManufacturer(manufacturer);
    }

    public void deleteConsole(int id) {
        consoleRepository.deleteById(id);
    }

    public Console updateConsole(int id, Console console) {
        console.setConsoleId(id);
        return consoleRepository.save(console);
    }
}

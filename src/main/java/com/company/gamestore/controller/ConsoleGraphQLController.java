package com.company.gamestore.controller;

import com.company.gamestore.model.Console;
import com.company.gamestore.service.ConsoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ConsoleGraphQLController {

    @Autowired
    private ConsoleService consoleService;

    @QueryMapping
    public List<Console> consoles() {
        return consoleService.getAllConsoles();
    }

    @QueryMapping
    public Console consoleById(int consoleId) {
        return consoleService.getConsoleById(consoleId);
    }

    @QueryMapping
    public List<Console> consolesByManufacturer(String manufacturer) {
        return consoleService.getConsolesByManufacturer(manufacturer);
    }
}

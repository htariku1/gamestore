package com.company.gamestore.controller;

import com.company.gamestore.model.Console;
import com.company.gamestore.service.ConsoleService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ConsoleController.class)
public class ConsoleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ConsoleService consoleService;

    @Test
    public void testCreateConsole() throws Exception {
        Console console = new Console();
        console.setModel("PS5");

        Mockito.when(consoleService.createConsole(Mockito.any(Console.class))).thenReturn(console);

        mockMvc.perform(post("/consoles")
                        .contentType("application/json")
                        .content("{\"model\":\"PS5\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.model").value("PS5"));
    }

    @Test
    public void testGetConsoleById() throws Exception {
        Console console = new Console();
        console.setConsoleId(1);
        console.setModel("Xbox");

        Mockito.when(consoleService.getConsoleById(1)).thenReturn(console);

        mockMvc.perform(get("/consoles/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.model").value("Xbox"));
    }
}

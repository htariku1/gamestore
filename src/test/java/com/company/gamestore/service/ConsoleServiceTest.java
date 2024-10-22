package com.company.gamestore.service;

import com.company.gamestore.model.Console;
import com.company.gamestore.repository.ConsoleRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
public class ConsoleServiceTest {

    @Mock
    private ConsoleRepository consoleRepository;

    @InjectMocks
    private ConsoleService consoleService;

    @Test
    public void testCreateConsole() {
        Console console = new Console();
        console.setModel("PS5");

        when(consoleRepository.save(any(Console.class))).thenReturn(console);

        Console createdConsole = consoleService.createConsole(console);

        assertEquals("PS5", createdConsole.getModel());
    }

    @Test
    public void testGetConsoleById() {
        Console console = new Console();
        console.setConsoleId(1);
        console.setModel("Xbox");

        when(consoleRepository.findById(1)).thenReturn(Optional.of(console));

        Console foundConsole = consoleService.getConsoleById(1);

        assertNotNull(foundConsole);
        assertEquals("Xbox", foundConsole.getModel());
    }

    @Test
    public void testDeleteConsole() {
        consoleService.deleteConsole(1);
        Mockito.verify(consoleRepository).deleteById(1);
    }
}

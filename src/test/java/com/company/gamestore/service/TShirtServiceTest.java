package com.company.gamestore.service;

import com.company.gamestore.model.TShirt;
import com.company.gamestore.repository.TShirtRepository;
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
public class TShirtServiceTest {

    @Mock
    private TShirtRepository tshirtRepository;

    @InjectMocks
    private TShirtService tshirtService;

    @Test
    public void testCreateTShirt() {
        TShirt tshirt = new TShirt();
        tshirt.setColor("Red");

        when(tshirtRepository.save(any(TShirt.class))).thenReturn(tshirt);

        TShirt createdTShirt = tshirtService.createTShirt(tshirt);

        assertEquals("Red", createdTShirt.getColor());
    }

    @Test
    public void testGetTShirtById() {
        TShirt tshirt = new TShirt();
        tshirt.setTshirtId(1);
        tshirt.setColor("Blue");

        when(tshirtRepository.findById(1)).thenReturn(Optional.of(tshirt));

        TShirt foundTShirt = tshirtService.getTShirtById(1);

        assertNotNull(foundTShirt);
        assertEquals("Blue", foundTShirt.getColor());
    }

    @Test
    public void testDeleteTShirt() {
        tshirtService.deleteTShirt(1);
        Mockito.verify(tshirtRepository).deleteById(1);
    }
}

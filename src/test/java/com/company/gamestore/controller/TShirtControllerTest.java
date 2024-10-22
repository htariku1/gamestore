package com.company.gamestore.controller;

import com.company.gamestore.model.TShirt;
import com.company.gamestore.service.TShirtService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(TShirtController.class)
public class TShirtControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TShirtService tshirtService;

    @Test
    public void testCreateTShirt() throws Exception {
        TShirt tshirt = new TShirt();
        tshirt.setColor("Red");

        Mockito.when(tshirtService.createTShirt(Mockito.any(TShirt.class))).thenReturn(tshirt);

        mockMvc.perform(post("/tshirts")
                        .contentType("application/json")
                        .content("{\"color\":\"Red\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.color").value("Red"));
    }

    @Test
    public void testGetTShirtById() throws Exception {
        TShirt tshirt = new TShirt();
        tshirt.setTshirtId(1);
        tshirt.setColor("Blue");

        Mockito.when(tshirtService.getTShirtById(1)).thenReturn(tshirt);

        mockMvc.perform(get("/tshirts/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.color").value("Blue"));
    }
}

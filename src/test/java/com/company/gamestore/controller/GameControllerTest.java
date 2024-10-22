package com.company.gamestore.controller;

import com.company.gamestore.model.Game;
import com.company.gamestore.service.GameService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(GameController.class)
public class GameControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GameService gameService;

    @Test
    public void testCreateGame() throws Exception {
        Game game = new Game();
        game.setTitle("Test Game");

        Mockito.when(gameService.createGame(Mockito.any(Game.class))).thenReturn(game);

        mockMvc.perform(post("/games")
                        .contentType("application/json")
                        .content("{\"title\":\"Test Game\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Test Game"));
    }
}

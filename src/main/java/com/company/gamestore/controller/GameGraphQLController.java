package com.company.gamestore.controller;

import com.company.gamestore.model.Game;
import com.company.gamestore.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class GameGraphQLController {

    @Autowired
    private GameService gameService;

    @QueryMapping
    public List<Game> games() {
        return gameService.getAllGames();
    }

    @QueryMapping
    public Game gameById(int gameId) {
        return gameService.getGameById(gameId);
    }

    @QueryMapping
    public List<Game> gamesByTitle(String title) {
        return gameService.getGamesByTitle(title);
    }

    @QueryMapping
    public List<Game> gamesByStudio(String studio) {
        return gameService.getGamesByStudio(studio);
    }

    @QueryMapping
    public List<Game> gamesByEsrbRating(String esrbRating) {
        return gameService.getGamesByEsrbRating(esrbRating);
    }
}

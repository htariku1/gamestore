package com.company.gamestore.controller;

import com.company.gamestore.model.Game;
import com.company.gamestore.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
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
    public List<Game> gamesByCategory(@Argument String category) {
        return gameService.getGamesByCategory(category);
    }

    @QueryMapping
    public List<Game> gamesByCriteria(@Argument String title, @Argument String esrbRating, @Argument String studio) {
        return gameService.getGamesByCriteria(title, esrbRating, studio);
    }
}

package com.company.gamestore.service;

import com.company.gamestore.model.Game;
import com.company.gamestore.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public Game createGame(Game game) {
        return gameRepository.save(game);
    }

    public Game getGameById(int id) {
        return gameRepository.findById(id).orElse(null);
    }

    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    public List<Game> getGamesByStudio(String studio) {
        return gameRepository.findByStudio(studio);
    }

    public List<Game> getGamesByEsrbRating(String esrbRating) {
        return gameRepository.findByEsrbRating(esrbRating);
    }

    public List<Game> getGamesByTitle(String title) {
        return gameRepository.findByTitle(title);
    }

    public void deleteGame(int id) {
        gameRepository.deleteById(id);
    }

    public Game updateGame(int id, Game game) {
        game.setGameId(id);
        return gameRepository.save(game);
    }
}

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


    public List<Game> getGamesByCriteria(String title, String esrbRating, String studio) {
        if ((title == null || title.isEmpty()) &&
                (esrbRating == null || esrbRating.isEmpty()) &&
                (studio == null || studio.isEmpty())) {
            // If no criteria is provided, return all games
            return gameRepository.findAll();
        } else {
            // If any criteria is provided, perform a filtered search
            return gameRepository.findByTitleContainingIgnoreCaseAndEsrbRatingContainingIgnoreCaseAndStudioContainingIgnoreCase(
                    title != null ? title : "",
                    esrbRating != null ? esrbRating : "",
                    studio != null ? studio : ""
            );
        }
    }
    public List<Game> getGamesByCategory(String category) {
        return gameRepository.findByCategory(category);
    }


}

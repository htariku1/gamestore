package com.company.gamestore.controller;

import com.company.gamestore.model.Game;
import com.company.gamestore.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/games")
public class GameController {

    @Autowired
    private GameService gameService;

    @PostMapping
    public ResponseEntity<Game> createGame(@RequestBody Game game) {
        return ResponseEntity.ok(gameService.createGame(game));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Game> getGameById(@PathVariable int id) {
        return ResponseEntity.ok(gameService.getGameById(id));
    }

    @GetMapping
    public ResponseEntity<List<Game>> getAllGames() {
        return ResponseEntity.ok(gameService.getAllGames());
    }

    @GetMapping("/studio/{studio}")
    public ResponseEntity<List<Game>> getGamesByStudio(@PathVariable String studio) {
        return ResponseEntity.ok(gameService.getGamesByStudio(studio));
    }

    @GetMapping("/esrb/{esrbRating}")
    public ResponseEntity<List<Game>> getGamesByEsrbRating(@PathVariable String esrbRating) {
        return ResponseEntity.ok(gameService.getGamesByEsrbRating(esrbRating));
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<List<Game>> getGamesByTitle(@PathVariable String title) {
        return ResponseEntity.ok(gameService.getGamesByTitle(title));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGame(@PathVariable int id) {
        gameService.deleteGame(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Game> updateGame(@PathVariable int id, @RequestBody Game game) {
        return ResponseEntity.ok(gameService.updateGame(id, game));
    }
}

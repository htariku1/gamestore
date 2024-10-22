package com.company.gamestore.controller;

import com.company.gamestore.model.TShirt;
import com.company.gamestore.service.TShirtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class TShirtGraphQLController {

    @Autowired
    private TShirtService tshirtService;

    @QueryMapping
    public List<TShirt> tshirts() {
        return tshirtService.getAllTShirts();
    }

    @QueryMapping
    public TShirt tshirtById(int tshirtId) {
        return tshirtService.getTShirtById(tshirtId);
    }

    @QueryMapping
    public List<TShirt> tshirtsByColor(String color) {
        return tshirtService.getTShirtsByColor(color);
    }

    @QueryMapping
    public List<TShirt> tshirtsBySize(String size) {
        return tshirtService.getTShirtsBySize(size);
    }
}

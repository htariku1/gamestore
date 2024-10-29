package com.company.gamestore.controller;

import com.company.gamestore.model.TShirt;
import com.company.gamestore.service.TShirtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class TShirtGraphQLController {

    @Autowired
    private TShirtService tshirtService;

    @QueryMapping
    public List<TShirt> tshirts(@Argument String color, @Argument String size) {
        return tshirtService.getTShirtsByCriteria(color, size);
    }
}

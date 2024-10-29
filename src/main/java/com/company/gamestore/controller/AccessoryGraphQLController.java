package com.company.gamestore.controller;

import com.company.gamestore.model.Accessory;
import com.company.gamestore.service.AccessoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class AccessoryGraphQLController {

    @Autowired
    private AccessoryService accessoryService;

    @QueryMapping
    public List<Accessory> accessories() {
        return accessoryService.getAllAccessories();
    }

    @QueryMapping
    public List<Accessory> accessoriesByCategory(@Argument String category) {
        return accessoryService.getAccessoriesByCategory(category);
    }

    @QueryMapping
    public List<Accessory> accessoriesBySubCategory(@Argument String subCategory) {
        return accessoryService.getAccessoriesBySubCategory(subCategory);
    }

    @QueryMapping
    public List<Accessory> accessoriesByCategoryAndSubCategory(@Argument String category, @Argument String subCategory) {
        return accessoryService.getAccessoriesByCategoryAndSubCategory(category, subCategory);
    }
}

package com.company.gamestore.controller;

import com.company.gamestore.model.Accessory;
import com.company.gamestore.service.AccessoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/accessories")
public class AccessoryController {

    @Autowired
    private AccessoryService accessoryService;

    @GetMapping
    public List<Accessory> getAllAccessories() {
        return accessoryService.getAllAccessories();
    }

    @GetMapping("/category/{category}")
    public List<Accessory> getAccessoriesByCategory(@PathVariable String category) {
        return accessoryService.getAccessoriesByCategory(category);
    }

    @GetMapping("/subcategory/{subCategory}")
    public List<Accessory> getAccessoriesBySubCategory(@PathVariable String subCategory) {
        return accessoryService.getAccessoriesBySubCategory(subCategory);
    }

    @GetMapping("/category/{category}/subcategory/{subCategory}")
    public List<Accessory> getAccessoriesByCategoryAndSubCategory(@PathVariable String category, @PathVariable String subCategory) {
        return accessoryService.getAccessoriesByCategoryAndSubCategory(category, subCategory);
    }

    // Additional endpoints if necessary
}

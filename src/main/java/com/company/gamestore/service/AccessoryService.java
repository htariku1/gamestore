package com.company.gamestore.service;

import com.company.gamestore.model.Accessory;
import com.company.gamestore.repository.AccessoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AccessoryService {

    @Autowired
    private AccessoryRepository accessoryRepository;

    public List<Accessory> getAllAccessories() {
        return accessoryRepository.findAll();
    }

    public List<Accessory> getAccessoriesByCategory(String category) {
        return accessoryRepository.findByCategory(category);
    }

    public List<Accessory> getAccessoriesBySubCategory(String subCategory) {
        return accessoryRepository.findBySubCategory(subCategory);
    }

    public List<Accessory> getAccessoriesByCategoryAndSubCategory(String category, String subCategory) {
        return accessoryRepository.findByCategoryAndSubCategory(category, subCategory);
    }

}

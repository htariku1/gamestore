package com.company.gamestore.repository;

import com.company.gamestore.model.Accessory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AccessoryRepository extends JpaRepository<Accessory, Integer> {
    List<Accessory> findByCategory(String category);
    List<Accessory> findBySubCategory(String subCategory);
    List<Accessory> findByCategoryAndSubCategory(String category, String subCategory);
}

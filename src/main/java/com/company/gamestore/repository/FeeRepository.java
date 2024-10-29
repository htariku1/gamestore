package com.company.gamestore.repository;

import com.company.gamestore.model.Fee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeeRepository extends JpaRepository<Fee, String> {
}

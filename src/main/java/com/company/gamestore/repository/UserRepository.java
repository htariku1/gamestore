// src/main/java/com/company/gamestore/repository/UserRepository.java

package com.company.gamestore.repository;

import com.company.gamestore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}

package com.company.gamestore.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tshirt")
public class TShirt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tshirtId;

    private String size;
    private String color;
    private String description;
    private BigDecimal price;
    private int quantity;

    // Getters and Setters
    public int getTshirtId() {
        return tshirtId;
    }

    public void setTshirtId(int tshirtId) {
        this.tshirtId = tshirtId;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

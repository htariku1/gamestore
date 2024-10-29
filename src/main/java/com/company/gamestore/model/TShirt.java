package com.company.gamestore.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tshirt")
public class TShirt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tshirtId;

    @NotBlank(message = "Size is required")
    @Size(max = 20)
    private String size;

    @NotBlank(message = "Color is required")
    @Size(max = 20)
    private String color;

    @NotBlank(message = "Description is required")
    @Size(max = 255)
    private String description;

    @NotNull(message = "Price is required")
    @Digits(integer = 5, fraction = 2)
    private BigDecimal price;

    @NotNull(message = "Quantity is required")
    @Min(value = 0, message = "Quantity cannot be negative")
    private Integer quantity;

    // Getters and Setters
    // ...

    public Integer getTshirtId() {
        return tshirtId;
    }

    public void setTshirtId(Integer tshirtId) {
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

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}

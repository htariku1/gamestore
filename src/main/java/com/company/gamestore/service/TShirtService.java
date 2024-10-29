package com.company.gamestore.service;

import com.company.gamestore.model.TShirt;
import com.company.gamestore.repository.TShirtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TShirtService {

    @Autowired
    private TShirtRepository tshirtRepository;

    public TShirt createTShirt(TShirt tshirt) {
        return tshirtRepository.save(tshirt);
    }

    public TShirt getTShirtById(int id) {
        return tshirtRepository.findById(id).orElse(null);
    }

    public List<TShirt> getAllTShirts() {
        return tshirtRepository.findAll();
    }

    public List<TShirt> getTShirtsByColor(String color) {
        return tshirtRepository.findByColor(color);
    }

    public List<TShirt> getTShirtsBySize(String size) {
        return tshirtRepository.findBySize(size);
    }

    public void deleteTShirt(int id) {
        tshirtRepository.deleteById(id);
    }

    public TShirt updateTShirt(int id, TShirt tshirt) {
        tshirt.setTshirtId(id);
        return tshirtRepository.save(tshirt);
    }
    public List<TShirt> getTShirtsByCriteria(String color, String size) {
        if ((color == null || color.isEmpty()) &&
                (size == null || size.isEmpty())) {
            return tshirtRepository.findAll();
        } else if ((color != null && !color.isEmpty()) &&
                (size != null && !size.isEmpty())) {
            return tshirtRepository.findByColorAndSize(color, size);
        } else if (color != null && !color.isEmpty()) {
            return tshirtRepository.findByColor(color);
        } else {
            return tshirtRepository.findBySize(size);
        }
    }

}

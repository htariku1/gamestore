package com.company.gamestore.service;

import com.company.gamestore.model.*;
import com.company.gamestore.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private TaxRepository taxRepository;

    @Autowired
    private FeeRepository feeRepository;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private ConsoleRepository consoleRepository;

    @Autowired
    private TShirtRepository tshirtRepository;

    public Invoice createInvoice(Invoice invoice) {
        // Validate state
        Tax taxEntry = taxRepository.findById(invoice.getState()).orElse(null);
        if (taxEntry == null) {
            throw new IllegalArgumentException("Invalid state code: " + invoice.getState());
        }

        // Validate item type and retrieve item
        BigDecimal unitPrice;
        switch (invoice.getItemType()) {
            case "Game":
                Game game = gameRepository.findById(invoice.getItemId()).orElse(null);
                if (game == null) {
                    throw new IllegalArgumentException("Game not found with ID: " + invoice.getItemId());
                }
                if (game.getQuantity() < invoice.getQuantity()) {
                    throw new IllegalArgumentException("Not enough quantity in stock for Game ID: " + invoice.getItemId());
                }
                unitPrice = game.getPrice();
                // Update game quantity
                game.setQuantity(game.getQuantity() - invoice.getQuantity());
                gameRepository.save(game);
                break;
            case "Console":
                Console console = consoleRepository.findById(invoice.getItemId()).orElse(null);
                if (console == null) {
                    throw new IllegalArgumentException("Console not found with ID: " + invoice.getItemId());
                }
                if (console.getQuantity() < invoice.getQuantity()) {
                    throw new IllegalArgumentException("Not enough quantity in stock for Console ID: " + invoice.getItemId());
                }
                unitPrice = console.getPrice();
                // Update console quantity
                console.setQuantity(console.getQuantity() - invoice.getQuantity());
                consoleRepository.save(console);
                break;
            case "T-Shirt":
                TShirt tshirt = tshirtRepository.findById(invoice.getItemId()).orElse(null);
                if (tshirt == null) {
                    throw new IllegalArgumentException("T-Shirt not found with ID: " + invoice.getItemId());
                }
                if (tshirt.getQuantity() < invoice.getQuantity()) {
                    throw new IllegalArgumentException("Not enough quantity in stock for T-Shirt ID: " + invoice.getItemId());
                }
                unitPrice = tshirt.getPrice();
                // Update t-shirt quantity
                tshirt.setQuantity(tshirt.getQuantity() - invoice.getQuantity());
                tshirtRepository.save(tshirt);
                break;
            default:
                throw new IllegalArgumentException("Invalid item type: " + invoice.getItemType());
        }

        // Set unit price
        invoice.setUnitPrice(unitPrice);

        // Calculate subtotal
        BigDecimal subtotal = unitPrice.multiply(BigDecimal.valueOf(invoice.getQuantity()));

        // Calculate tax
        BigDecimal tax = subtotal.multiply(taxEntry.getRate()).setScale(2, BigDecimal.ROUND_HALF_UP);

        // Get processing fee
        Fee feeEntry = feeRepository.findById(invoice.getItemType()).orElse(null);
        if (feeEntry == null) {
            throw new IllegalArgumentException("Processing fee not found for product type: " + invoice.getItemType());
        }
        BigDecimal processingFee = feeEntry.getFee();

        // Additional fee if quantity > 10
        if (invoice.getQuantity() > 10) {
            processingFee = processingFee.add(new BigDecimal("15.49"));
        }

        // Calculate total
        BigDecimal total = subtotal.add(tax).add(processingFee);

        // Set calculated fields
        invoice.setSubtotal(subtotal);
        invoice.setTax(tax);
        invoice.setProcessingFee(processingFee);
        invoice.setTotal(total);

        // Save invoice
        return invoiceRepository.save(invoice);
    }

    public Invoice getInvoiceById(int id) {
        return invoiceRepository.findById(id).orElse(null);
    }

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    public void deleteInvoice(int id) {
        invoiceRepository.deleteById(id);
    }
}

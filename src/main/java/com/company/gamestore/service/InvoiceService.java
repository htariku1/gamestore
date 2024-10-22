package com.company.gamestore.service;

import com.company.gamestore.model.Invoice;
import com.company.gamestore.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    public Invoice createInvoice(Invoice invoice) {
        // Validate order quantity
        if (invoice.getQuantity() <= 0) {
            throw new IllegalArgumentException("Order quantity must be greater than 0.");
        }

        // Calculate tax and fees
        BigDecimal taxRate = calculateTax(invoice.getState());
        BigDecimal processingFee = calculateProcessingFee(invoice.getQuantity());

        BigDecimal subtotal = invoice.getUnitPrice().multiply(BigDecimal.valueOf(invoice.getQuantity()));
        BigDecimal tax = subtotal.multiply(taxRate);
        BigDecimal total = subtotal.add(tax).add(processingFee);

        invoice.setSubtotal(subtotal);
        invoice.setTax(tax);
        invoice.setProcessingFee(processingFee);
        invoice.setTotal(total);

        return invoiceRepository.save(invoice);
    }

    public List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    public Invoice getInvoiceById(int id) {
        return invoiceRepository.findById(id).orElse(null);
    }

    public void deleteInvoice(int id) {
        invoiceRepository.deleteById(id);
    }

    private BigDecimal calculateTax(String state) {
        // In a real application, tax rates would be fetched from a database or service
        switch (state) {
            case "CA":
                return BigDecimal.valueOf(0.06);
            case "TX":
                return BigDecimal.valueOf(0.03);
            default:
                return BigDecimal.valueOf(0.05);
        }
    }

    private BigDecimal calculateProcessingFee(int quantity) {
        if (quantity > 10) {
            return BigDecimal.valueOf(15.49);
        } else {
            return BigDecimal.valueOf(1.49);
        }
    }
}

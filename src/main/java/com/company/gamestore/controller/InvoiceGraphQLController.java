package com.company.gamestore.controller;

import com.company.gamestore.model.Invoice;
import com.company.gamestore.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.math.BigDecimal;
import java.util.List;

@Controller
public class InvoiceGraphQLController {

    @Autowired
    private InvoiceService invoiceService;

    @QueryMapping
    public List<Invoice> invoices() {
        return invoiceService.getAllInvoices();
    }

    @QueryMapping
    public Invoice invoiceById(int invoiceId) {
        return invoiceService.getInvoiceById(invoiceId);
    }

    @MutationMapping
    public Invoice createInvoice(
            String name, String street, String city, String state, String zipcode,
            String itemType, int itemId, float unitPrice, int quantity) {

        Invoice invoice = new Invoice();
        invoice.setName(name);
        invoice.setStreet(street);
        invoice.setCity(city);
        invoice.setState(state);
        invoice.setZipcode(zipcode);
        invoice.setItemType(itemType);
        invoice.setItemId(itemId);
        invoice.setUnitPrice(BigDecimal.valueOf(unitPrice));
        invoice.setQuantity(quantity);

        return invoiceService.createInvoice(invoice);
    }
}

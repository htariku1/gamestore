package com.company.gamestore.repository;

import com.company.gamestore.model.Invoice;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DataJpaTest
public class InvoiceRepositoryTest {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Test
    public void testCreateInvoice() {
        Invoice invoice = new Invoice();
        invoice.setName("Customer 1");
        invoice.setCity("Los Angeles");
        invoice.setState("CA");
        invoice.setItemType("Game");
        invoice.setItemId(123);
        invoice.setUnitPrice(BigDecimal.valueOf(49.99));
        invoice.setQuantity(2);

        Invoice savedInvoice = invoiceRepository.save(invoice);
        assertNotNull(savedInvoice.getInvoiceId());
    }
}

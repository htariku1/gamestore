package com.company.gamestore.service;

import com.company.gamestore.model.Invoice;
import com.company.gamestore.repository.InvoiceRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
public class InvoiceServiceTest {

    @Mock
    private InvoiceRepository invoiceRepository;

    @InjectMocks
    private InvoiceService invoiceService;

    @Test
    public void testCreateInvoice() {
        Invoice invoice = new Invoice();
        invoice.setUnitPrice(BigDecimal.valueOf(20.00));
        invoice.setQuantity(12);
        invoice.setState("CA");

        when(invoiceRepository.save(any(Invoice.class))).thenReturn(invoice);

        Invoice createdInvoice = invoiceService.createInvoice(invoice);

        assertEquals(12, createdInvoice.getQuantity());
        assertNotNull(createdInvoice.getTotal());
    }

    @Test
    public void testGetInvoiceById() {
        Invoice invoice = new Invoice();
        invoice.setInvoiceId(1);
        invoice.setName("Customer 1");

        when(invoiceRepository.findById(1)).thenReturn(Optional.of(invoice));

        Invoice foundInvoice = invoiceService.getInvoiceById(1);

        assertNotNull(foundInvoice);
        assertEquals("Customer 1", foundInvoice.getName());
    }
}

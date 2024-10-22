package com.company.gamestore.controller;

import com.company.gamestore.model.Invoice;
import com.company.gamestore.service.InvoiceService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(InvoiceController.class)
public class InvoiceControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private InvoiceService invoiceService;

    @Test
    public void testCreateInvoice() throws Exception {
        Invoice invoice = new Invoice();
        invoice.setName("Customer 1");

        Mockito.when(invoiceService.createInvoice(Mockito.any(Invoice.class))).thenReturn(invoice);

        mockMvc.perform(post("/invoices")
                        .contentType("application/json")
                        .content("{\"name\":\"Customer 1\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Customer 1"));
    }

    @Test
    public void testGetInvoiceById() throws Exception {
        Invoice invoice = new Invoice();
        invoice.setInvoiceId(1);
        invoice.setName("Customer 1");

        Mockito.when(invoiceService.getInvoiceById(1)).thenReturn(invoice);

        mockMvc.perform(get("/invoices/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Customer 1"));
    }
}

package com.jumia.phone.customer;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * @author Denis Gitonga
 */
@RestController
@AllArgsConstructor
@RequestMapping(path = "/customers")
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping
    public Flux<CustomerDto> getCustomers() {
        return customerService.getCustomers();
    }
}

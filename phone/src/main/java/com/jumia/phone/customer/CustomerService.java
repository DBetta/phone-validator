package com.jumia.phone.customer;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.util.Arrays;

/**
 * @author Denis Gitonga
 */
@Service
@Transactional
@AllArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    @Transactional(readOnly = true)
    public Flux<CustomerDto> getCustomers() {
        final var customerFlux = fetchCustomers();

        return customerFlux.map(customer -> {
            final var country = resolveCustomerCountry(customer.getPhone());
            final var phoneState = validatePhone(country, customer.getPhone());

            return CustomerDto.builder()
                    .id(customer.getId())
                    .phoneState(phoneState)
                    .customerName(customer.getName())
                    .countryName(country.getName())
                    .countryCode(country.getCode())
                    .phone(customer.getPhone())
                    .build();
        });
    }

    private Country resolveCustomerCountry(String phone) {
        return Arrays.stream(Country.values())
                .filter(country -> {
                    final var code = "(" +
                            country.getCode().replaceFirst("\\+", "") +
                            ")";
                    return phone.startsWith(code);
                }).findFirst()
                .orElseThrow(() -> new RuntimeException("Could not get country for phone number: " + phone));
    }

    private PhoneState validatePhone(Country country, String phone) {
        final var matcher = country.getRegex().matcher(phone);
        return matcher.matches() ? PhoneState.VALID : PhoneState.INVALID;
    }

    private Flux<Customer> fetchCustomers() {
        return Mono.defer(() -> Mono.fromCallable(customerRepository::findAll)
                        .subscribeOn(Schedulers.boundedElastic()))
                .flatMapMany(Flux::fromIterable);
    }
}

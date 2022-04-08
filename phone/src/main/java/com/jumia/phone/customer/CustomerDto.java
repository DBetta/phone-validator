package com.jumia.phone.customer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

/**
 * @author Denis Gitonga
 */
@Value
@AllArgsConstructor
@Builder(toBuilder = true)
public class CustomerDto {
    int id;
    String countryName;
    String countryCode;
    PhoneState phoneState;
    String phone;
    String customerName;
}

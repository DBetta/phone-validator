package com.jumia.phone.customer;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Denis Gitonga
 */
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}

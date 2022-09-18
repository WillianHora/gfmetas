package com.gfmetas.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gfmetas.demo.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale,Long> {

}

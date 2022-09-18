package com.gfmetas.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gfmetas.demo.entities.Sale;
import com.gfmetas.demo.repositories.SaleRepository;

@Service

public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}

}

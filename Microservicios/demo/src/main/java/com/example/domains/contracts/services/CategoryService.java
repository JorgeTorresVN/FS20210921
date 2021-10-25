package com.example.domains.contracts.services;

import java.util.List;
import java.util.Optional;

import com.example.domains.core.services.contracts.DomainService;
import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

public interface CategoryService extends DomainService<Category, Integer>  {

	
	

}

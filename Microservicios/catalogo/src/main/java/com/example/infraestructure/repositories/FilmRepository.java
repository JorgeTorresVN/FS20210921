package com.example.infraestructure.repositories;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.domains.entities.Film;
@RepositoryRestResource(exported=false)
public interface FilmRepository extends JpaRepository<Film, Integer> {
	<T> List<T> findByFilmIdNotNull(Class<T> type);
	<T> Iterable<T> findByFilmIdNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByFilmIdNotNull(Pageable pageable, Class<T> type);
	
	List<Film> findByLastUpdateGreaterThanEqualOrderByLastUpdate(Timestamp fecha);
}

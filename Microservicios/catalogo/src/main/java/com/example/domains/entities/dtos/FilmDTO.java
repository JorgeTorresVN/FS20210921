package com.example.domains.entities.dtos;

import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {
	@JsonProperty("film_id")
	private int filmId;
	@JsonProperty("title")
	private String titulo;
	@JsonProperty("description")
	private String descripcion;
	@JsonProperty("language")
	private Language language;
	
	public FilmDTO from(Film source) {
		return new FilmDTO(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				source.getLanguage()
				);
	}

}

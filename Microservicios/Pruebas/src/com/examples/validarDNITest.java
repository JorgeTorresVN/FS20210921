package com.examples;


import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class validarDNITest {
	validarDNI validar;
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		validar= new validarDNI();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@ParameterizedTest
	@DisplayName("Prueba Validar DNI")
	@CsvSource({"20583144P","23504824K"})
	void testValidarDNI(String dni) {
		assertTrue( validar.validarDNI(dni));
	}
	@ParameterizedTest
	@DisplayName("Prueba Validar DNI Error")
	@CsvSource({"205831P","235047K"})
	void testValidarDNIError(String dni) {
		assertFalse( validar.validarDNI(dni));
	}
}

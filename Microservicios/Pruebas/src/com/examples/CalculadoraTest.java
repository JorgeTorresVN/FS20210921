package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import java.nio.channels.NonReadableChannelException;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;


class CalculadoraTest {
	Calculadora calculadora;
	

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		calculadora = new Calculadora();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	@DisplayName("Suma")
	void testSuma() {
		assertEquals(4, calculadora.suma(2, 2));
	}

	@Nested
		@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
		class Divisiones {
		@Test
		@DisplayName("Division decimales")
		void test_Divide_Double_Double() {
			assertEquals(0.5, calculadora.divide(1.0, 2));
//			assertThrows(Exception.class,() -> calculadora.divide(1.0, 0));
			assertEquals(Double.POSITIVE_INFINITY, calculadora.divide(1.0, 0));
			
		}

		@Test
		@DisplayName("Division entera")
		void testDivideIntInt() {
			assertEquals(0, calculadora.divide(1, 2));
			assertThrows(Exception.class, () -> calculadora.divide(1, 0));
		}
	
	}

}

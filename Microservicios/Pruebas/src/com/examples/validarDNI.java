package com.examples;

import java.util.regex.Pattern;

public class validarDNI {

	public boolean validarDNI(String dni) {
		Pattern pattern = Pattern.compile("[0-9]{7,8}[A-Z a-z]");
		if (!pattern.matcher(dni).matches()) {
			return false;
		}
		String numero = dni.substring(0, dni.length() - 1);
		String letra = dni.substring(dni.length() - 1);

		int resto = Integer.parseInt(numero) % 23;

		return Character.toUpperCase(letra.charAt(0)) == "TRWAGMYFPDXBNJZSQVHLCKE".charAt(resto);

	}
}

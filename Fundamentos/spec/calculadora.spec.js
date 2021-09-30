// 'use strict'
describe("Calculadora", () => {
    it("suma", () => {
        let a = 2;
        let b = 2;
        let resultado;

        resultado = suma(a, b);
        expect(resultado).toBe(4);
    });
    it("resta", () => {
        let a = 2;
        let b = 2;
        let resultado;
        resultado = resta(a, b);
        expect(resultado).toBe(-0);
    });
    it("division", () => {
        let a = 2;
        let b = 2;
        let resultado;
        resultado = resta(a, b);
        expect(resultado).toBe(0);
    });
});

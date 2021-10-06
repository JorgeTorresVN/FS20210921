import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {


   acum: number;
  op: string;
  pantalla: string;
  resultado: boolean;


  constructor() {
    this.acum = 0;
    this.op = '+';
    this.pantalla = '0'
    this.resultado = true;
  }
  calcular(operador: string) {
    let valor = parseFloat(this.pantalla);
    switch (this.op) {
      case '+': this.acum += valor;
        break;
      case '-': this.acum -= valor;
        break;
      case '*': this.acum *= valor;
        break;
      case '/': this.acum /= valor;
        break;
    }

    this.op = operador;
    this.resultado = true;
    this.pantalla = this.acum.toString();
  }
  ponDigito(num: string) {
    if (this.pantalla == '0' || this.resultado) {
      this.pantalla = num;
      this.resultado = false;
    } else {
      this.pantalla += num;
    }
  }
  borrarDigito() {
    if (this.resultado || this.pantalla.length == 1 || (this.pantalla.length == 2 && this.pantalla.startsWith('-'))) {
      this.pantalla = '0';
      this.resultado = true;
    } else
      this.pantalla = this.pantalla.substr(0,
        this.pantalla.length - 1);
  }
  limpiar(){
    this.acum = 0;
    this.op = '+';
    this.pantalla = '0';
    this.resultado = true;
  }
  ngOnInit(): void {
  }

}

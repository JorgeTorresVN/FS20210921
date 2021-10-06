import { Component, OnInit } from '@angular/core';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'demos', icono: '', componente: DemosComponent },
    { texto: 'calculadora', icono: '', componente: CalculadoraComponent },
    { texto: 'inicio', icono: '', componente: HomeComponent },
  ];
  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }
  ngOnInit(): void {
  }

}

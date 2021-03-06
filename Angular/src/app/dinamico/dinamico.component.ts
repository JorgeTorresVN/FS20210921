import { Component, OnInit } from '@angular/core';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { ClienteFormularioComponent, ClienteViewModel } from '../cliente-formulario/cliente-formulario.component';
import { ContactosComponent, CONTACTOS_COMPONENTES } from '../contactos/componente.component';
import { BlogComponent } from '../blog';
@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto: 'Contactos', icono: '', componente: ContactosComponent },
    {texto: 'formularioCliente', icono: '', componente: ClienteFormularioComponent },
    { texto: 'formulario', icono: '', componente: FormularioComponent },
    { texto: 'demos', icono: '', componente: DemosComponent },
    { texto: 'calculadora', icono: '', componente: CalculadoraComponent },
    { texto: 'inicio', icono: '', componente: HomeComponent },
    { texto: 'blog', icono: '', componente: BlogComponent },
  ];
  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }
  ngOnInit(): void {
  }

}

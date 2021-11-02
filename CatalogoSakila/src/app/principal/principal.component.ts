import { Component, OnInit } from '@angular/core';
import { ActoresComponent } from '../actor';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  menu = [
    { titulo: 'Actores', componente: ActoresComponent }
  ]
  actual = this.menu[0].componente;

  constructor() { }
  seleccionar(indice: number): void {

    this.actual = this.menu[indice].componente;
  }
  ngOnInit(): void {
  }

}

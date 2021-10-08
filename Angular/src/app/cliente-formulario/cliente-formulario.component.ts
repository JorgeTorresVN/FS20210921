import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService,NotificationType } from '../common-services';

export interface Cliente {
  customer_id: number | null;
  store_id: number | null;
  first_name: string;
  last_name: string;
  email: string | null;
  address_id: string | null;
  active: boolean | null;
  create_date: Date | null;
  last_update: Date | null;
}
@Injectable({ providedIn: 'root' })
export class ClienteViewModel {
  Listado: Array<Cliente> = [
    {
      customer_id: 1, store_id: 1, first_name: 'Pepito', last_name: 'Grillo', email: 'pepitoGrillo@hotmail.com',
      address_id: 'C/ Margarita', active: true, create_date: null, last_update: null
    }
  ]
  Elemento: Cliente = {
    customer_id: null, store_id: null, first_name: '', last_name: '', email: '',
    address_id: '', active: false, create_date: null, last_update: null
  };
  IsAdd = true;

  constructor(private notify: NotificationService){
    this.add();
  }
  public list(){
  }
  public add(){
    this.Elemento = {customer_id: null, store_id: null, first_name: '', last_name: '', email: '',
    address_id: '', active: false, create_date: null, last_update: null}
    this.IsAdd = true;
  }
  public edit(){
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }
  public view(){
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }
  public delete(){
    if(!window.confirm('¿Seguro?')) return;
    this.notify.add('Borrado');

  }
  public cancel(){

  }
  public send(){
    this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ' )+ JSON.stringify(this.Elemento), NotificationType.info);
  }
}
@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent implements OnInit {

  constructor(public vm: ClienteViewModel) { }

  ngOnInit(): void {
  }

}

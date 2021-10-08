import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../common-services';

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.scss']
})
export class EjemplosComponent implements OnInit {

  constructor(public vm: NotificationService) { }

  ngOnInit(): void {
  }

}


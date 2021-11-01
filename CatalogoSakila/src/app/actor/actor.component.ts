import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActoresViewModelService } from './servicios.service';

@Component({
  selector: 'app-actores',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActoresComponent implements OnInit, OnDestroy {
  constructor(protected vm: ActoresViewModelService) { }
  public get VM(): ActoresViewModelService { return this.vm; }
  ngOnInit(): void {
    this.vm.load();
  }
  ngOnDestroy(): void {
    this.vm.clear()
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-errors-messages',
  templateUrl: './show-errors-messages.component.html',
  styleUrls: ['./show-errors-messages.component.scss']
})
export class ShowErrorsMessagesComponent implements OnInit {
  @Input()
  constructor() { }

  ngOnInit(): void {
  }

}

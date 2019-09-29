import { Component, OnInit } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      })),
      state('closed', style({
        opacity: 0,
        backgroundColor: 'black'
      })),
      transition('closed => open', [
        animate('0.3s ease-out')
      ])
    ])
  ]
})
export class AdministrationComponent implements OnInit {

  option = 'form-data';
  selectedForm: string;
  isOpen = 'closed';

  constructor() { }

  ngOnInit() {
  }

  selectOption(option: string): void {
    this.option = option;
    this.selectedForm = '';
  }

  selectForm(id: string): void {
    this.isOpen = 'open';
    this.selectedForm = id;
  }

  destroyFormDetail(destroy: string): void {
    this.isOpen = 'closed';
    this.selectedForm = destroy;
  }
}

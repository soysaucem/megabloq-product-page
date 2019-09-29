import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-menu-bar',
  templateUrl: './admin-menu-bar.component.html',
  styleUrls: ['./admin-menu-bar.component.scss']
})
export class AdminMenuBarComponent implements OnInit {

  @Output() option = new EventEmitter();
  active = 'form-data';

  constructor() { }

  ngOnInit() { }
}

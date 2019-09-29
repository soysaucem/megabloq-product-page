import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const window: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  activeLink: any = this.route;

  constructor(
    readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  // Change navbar color on scrolling
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (position > 100) {
      document.getElementById('mainNav').classList.add('navbar-shrink');
    } else {
      document.getElementById('mainNav').classList.remove('navbar-shrink');
    }
  }
}

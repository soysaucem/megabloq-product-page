import { Component } from '@angular/core';
import { Angulartics2Clicky } from 'angulartics2/clicky';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'megabloq-landing-page';

  constructor(angulartics2Clicky: Angulartics2Clicky) {
    angulartics2Clicky.startTracking();
  }
}

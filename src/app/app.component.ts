import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my application';
  author = 'Luis Bolivar';
  count = 0;
  imgSource = './../favicon.ico';
  enable = true;

  deshabilitarInput() {
    if (this.enable === false ) {
      this.enable = true;
    } else {
      this.enable = false;
    }
  }
}

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
  enable = 0;
}

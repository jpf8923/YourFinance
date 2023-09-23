import { Component } from '@angular/core';

//Metadata
//Has urls data, selector
//app-root indicates the component is the entry point.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finance-app-frontend';
}

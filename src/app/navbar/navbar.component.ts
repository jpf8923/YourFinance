import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public check(login: boolean) {
      let isloggedin:boolean = false;
        isloggedin = login;
  }
}

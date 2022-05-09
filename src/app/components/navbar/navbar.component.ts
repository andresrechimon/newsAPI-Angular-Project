import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .logo{
    position: relative;
    width: 170px;
    left: 15px;
    background-size: contain;
    }
    `
  ]
})
export class NavbarComponent {

}

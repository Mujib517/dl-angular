import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    template: `
  <header class="container">
  <nav class="navbar navbar-inverse">
      <div class="navbar-brand">
          My Cool App
      </div>
      <ul class="navbar-nav nav">
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/products">Products</a></li>
          <li><a routerLink="/contact">Contact</a></li>
          <li><a routerLink="/lazy">Lazy</a></li>
      </ul>
      <div class="pull-right">
        <button routerLink="/login" class="btn btn-sm btn-danger">Login</button>
            &nbsp;
        <button *ngIf="isLoggedin" (click)="onLogout()" class="btn btn-sm btn-danger">Logout</button>
      </div>
  </nav>
</header>
  `,
    styles: []
})
export class HeaderComponent {

    isLoggedin: boolean;

    constructor(private userSvc: UserService, private router: Router) {
        this.isLoggedin = userSvc.isLoggedin();
    }


    onLogout() {
        this.userSvc.logout();
        this.router.navigate(["login"]);
    }
}
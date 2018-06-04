import { Component } from '@angular/core'
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  template: `<h1>Login</h1>

  <div *ngIf="failed" class="alert alert-danger">
    Wrong username or password
  </div>

  <div class="col-md-6">
    <div class="form-group">
      <input type="text" placeholder="Usernmae" class="form-control" [(ngModel)]="user.username"/>
    </div>
    <div class="form-group">
      <input type="password" placeholder="Password" class="form-control" [(ngModel)]="user.password"/>
    </div>
    <div class="form-group">
      <button class="btn btn-success" (click)="onLogin()">Login</button>
    </div>
  </div>
  
  `
})

export class LoginComponent {

  user: any = {};
  failed: boolean;

  constructor(private userSvc: UserService, private router: Router) { }

  onLogin() {
    this.userSvc.login(this.user)
      .subscribe(
        res => {
          this.userSvc.saveToken(res["token"]);
          this.router.navigate(["products"]);
        },
        err => this.failed = true
      );
  }
}
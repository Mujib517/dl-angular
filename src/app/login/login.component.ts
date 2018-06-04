import { Component } from '@angular/core'
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-login',
  template: `<h1>Login</h1>

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

  constructor(private userSvc: UserService) { }

  onLogin() {
    this.userSvc.login(this.user)
      .subscribe(
        res => this.userSvc.saveToken(res["token"]),
        err => console.log(err)
      );
  }
}
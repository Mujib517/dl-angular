import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  template: `
    <h1>Users</h1>

    <div class="col-md-5">
    <div *ngIf="hasError" class="alert alert-danger">Failed to load data. Please try again</div>
      
    
      <div *ngFor="let user of users" class="well">
        <h3>{{user.login}}</h3>
        <img [src]="user.avatar_url" width="120" height="120" class="img img-circle"/>
      </div>
    </div>
  `
})
export class UserListComponent {

  hasError: boolean;
  users: any;

  constructor(http: HttpClient) {
    //time delay
    http.get("https://api.github.com/users")
      .subscribe(
        res => this.users = res, //success
        err => this.hasError=true, //error
        () => console.log("Completed")
      );
  }
}
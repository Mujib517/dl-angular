import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable()
export class UserService {

  isAuthenticated: Subject<boolean> = new Subject();

  logout(): void {
    localStorage.removeItem("token");
    this.isAuthenticated.next(false);
  }

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post("https://exp-rest-api.herokuapp.com/api/users/login", user);
  }

  saveToken(token: string) {
    this.isAuthenticated.next(true);
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedin(): boolean {
    return true;
    //return !!localStorage.getItem("token");
  }
}
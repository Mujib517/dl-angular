import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class UserService {


  logout(): void {
    localStorage.removeItem("token");
  }

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post("https://exp-rest-api.herokuapp.com/api/users/login", user);
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedin(): boolean {
    return !!localStorage.getItem("token");
  }
}
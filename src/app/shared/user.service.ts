import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

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
    return !! localStorage.getItem("token");
  }
}
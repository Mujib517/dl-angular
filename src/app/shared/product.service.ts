import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get("https://exp-rest-api.herokuapp.com/api/products/");
  }

  getById(id: string) {
    return this.http.get("https://exp-rest-api.herokuapp.com/api/products/" + id);
  }
}
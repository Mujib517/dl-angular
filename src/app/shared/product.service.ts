import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, retry } from 'rxjs/operators';

@Injectable()
export class ProductService {

  public reviews: any[];

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get("https://exp-rest-api.herokuapp.com/api/products/")
      .pipe(map(res => res["data"]))
      .pipe(retry(3));
  }

  getById(id: string) {
    return this.http.get("https://exp-rest-api.herokuapp.com/api/products/" + id);
  }
}
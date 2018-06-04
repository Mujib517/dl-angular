import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, retry } from 'rxjs/operators';
import { UserService } from "./user.service";

@Injectable()
export class ProductService {

  public reviews: any[];

  constructor(private http: HttpClient, private userSvc: UserService) {
  }

  get() {


    var hdrs = { 'authorization': this.userSvc.getToken() };

    return this.http.get("https://exp-rest-api.herokuapp.com/api/products/", { headers: hdrs })
      .pipe(map(res => res["data"]))
      .pipe(retry(3));
  }

  getById(id: string) {

    return this.http.get("https://exp-rest-api.herokuapp.com/api/products/" + id);
  }

  save(product: any) {
    return this.http.post("https://exp-rest-api.herokuapp.com/api/products/", product);
  }

}
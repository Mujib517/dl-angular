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
    return this.http.get("https://exp-rest-api.herokuapp.com/api/products/")
      .pipe(map(res => res["data"]))
      .pipe(retry(3));
  }

  getById(id: string) {

    return this.http.get("https://exp-rest-api.herokuapp.com/api/products/" + id);
  }

  save(product: any) {

    const form: FormData = new FormData();

    form.append("brand", product.brand);
    form.append("price", product.price);
    form.append("model", product.model);
    form.append("inStock", product.inStock);
    form.append("img", product.file);

    var hdrs = {};

    return this.http.post("https://exp-rest-api.herokuapp.com/api/products/", form,{headers:hdrs});
  }

}
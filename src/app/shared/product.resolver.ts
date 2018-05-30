import { Injectable } from "@angular/core";
import { ProductService } from "./product.service";
import { Resolve } from "@angular/router";

@Injectable()
export class ProductResolver implements Resolve<any> {

  constructor(private productSvc: ProductService) { }

  resolve() {
    return this.productSvc.get();
  }
}
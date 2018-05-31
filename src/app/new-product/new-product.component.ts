import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
  templateUrl: './new-product.html'
})
export class NewProductComponent {

  product: any = {};
  isSuccess: boolean;
  hasError: boolean;

  constructor(private productSvc: ProductService) { }

  onSave() {
    console.log(this.product);

    this.productSvc.save(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.product = {};
          this.isSuccess = true;
        },
        err => {
          console.log(err);
          this.hasError = true;
        });
  }
}
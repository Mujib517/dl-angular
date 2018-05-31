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
          this.hasError = false;
          this.isSuccess = true;
        },
        err => {
          this.isSuccess = false;
          this.hasError = true;
        });
  }
}
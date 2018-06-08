import { Component, ViewEncapsulation } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
  templateUrl: './new-product.html',
   styleUrls: ['./new-product.css']
})
export class NewProductComponent {

  product: any = {};
  isSuccess: boolean;
  hasError: boolean;

  constructor(private productSvc: ProductService) { }

  onSave() {
    this.productSvc.save(this.product)
      .subscribe(
        res => {
          this.product = {};
          this.hasError = false;
          this.isSuccess = true;
        },
        err => {
          this.isSuccess = false;
          this.hasError = true;
        });
  }

  handleUpload(files) {
    this.product.file = files[0];
  }
}
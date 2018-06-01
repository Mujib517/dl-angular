import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.html'
})

export class ReactiveFormComponent {
  frm: FormGroup;

  constructor(private fb: FormBuilder, private productSvc: ProductService) {
    this.frm = fb.group({
      brand: [],
      model: [],
      price: [],
      inStock: []
    });
  }

  onSave() {
    this.productSvc.save(this.frm.value)
      .subscribe(
        res => this.frm.reset(),
        err => console.log(err)
      )
  }
}
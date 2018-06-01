import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.html'
})

export class ReactiveFormComponent {
  frm: FormGroup;

  constructor(private fb: FormBuilder, private productSvc: ProductService) {
    this.frm = fb.group({
      brand: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      model: ['',[Validators.required]],
      price: ['',[Validators.required,Validators.pattern("[0-9]{3,5}")]],
      inStock: []
    });
  }

  onSave() {
    if (this.frm.valid) {
      this.productSvc.save(this.frm.value)
        .subscribe(
          res => this.frm.reset(),
          err => console.log(err)
        );
    }
    else {
      console.log("Invalid form");
    }
  }
}
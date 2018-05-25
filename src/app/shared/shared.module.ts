import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";

@NgModule({
  declarations:[TimePipe],
  imports:[],
  providers:[ProductService],
  exports:[TimePipe]
})
export class SharedModule{}
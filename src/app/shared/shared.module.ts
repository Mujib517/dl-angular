import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { ProductResolver } from "./product.resolver";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./user.service";

@NgModule({
  declarations: [TimePipe],
  imports: [HttpClientModule],
  providers: [ProductService, ProductResolver,
    UserService, { provide: ConsoleLogger, useClass: FileLogger }],
  exports: [TimePipe]
})
export class SharedModule { }
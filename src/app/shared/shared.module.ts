import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { ProductResolver } from "./product.resolver";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UserService } from "./user.service";
import { AppInterceptor } from "./app.interceptor";

@NgModule({
  declarations: [TimePipe],
  imports: [HttpClientModule],
  providers: [ProductService, ProductResolver,
    UserService, { provide: ConsoleLogger, useClass: FileLogger },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }],
  exports: [TimePipe]
})
export class SharedModule { }
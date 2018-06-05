import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
// http//example-dev.com
//example-stage.com

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var hdrs = { 'authorization': localStorage.getItem("token") };

    let newReq = req.clone({ setHeaders: hdrs });

    return next.handle(newReq);
  }
}
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { UserService } from "./user.service";
// http//example-dev.com
//example-stage.com

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private userSvc: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.userSvc.getToken()) {
      var hdrs = { 'authorization': this.userSvc.getToken() };
      let newReq = req.clone({ setHeaders: hdrs });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
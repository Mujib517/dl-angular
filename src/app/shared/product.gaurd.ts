import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, CanDeactivate } from "@angular/router";
import { UserService } from "./user.service";
import { Observable } from "rxjs";

@Injectable()
export class ProductGaurd implements CanActivate,CanDeactivate<any> {

  canDeactivate(): boolean {
    return confirm("You have unsaved changes. Are you sure you want to move out");
  }
  constructor(private userSvc: UserService) { }

  canActivate(): boolean {
    //this.router.navigate(["login"]);
    return this.userSvc.isLoggedin();
  }
}
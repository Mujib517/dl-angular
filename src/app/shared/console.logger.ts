import { Injectable } from "@angular/core";

@Injectable()
export class ConsoleLogger {

  log(msg: any) {
    console.log(msg);
  }

  warn(msg: any) {
    console.warn(msg);
  }

  error(msg: any) {
    console.error(msg);
  }
}
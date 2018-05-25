import { Injectable } from "@angular/core";

@Injectable()
export class FileLogger {

  constructor(private x: number) {

  }

  log(msg: any) {
    console.log("File:", msg, this.x);
  }

  warn(msg: any) {
    console.warn("File:", msg);
  }

  error(msg: any) {
    console.error("File:", msg);
  }
}
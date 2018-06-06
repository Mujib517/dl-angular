import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger';

@Component({
  selector: 'app-about',
  template: `
    <h1 #frm>About Page</h1>

    <h1>{{count}}</h1>

    <button class="btn btn-danger" (click)="inc()">++</button>


    <app-counter [count]="count"></app-counter>

  `,
  styles: []
})
export class AboutComponent {
  count: number = 0;
  interval: any;
  //asynchrnous operation: timers, web svc calls, db, events

  inc() {
    this.count++;
  }

  ngOnInit() {
    this.interval = setInterval(() => this.count++, 1000);
  }

  ngDoCheck() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  constructor(logger: ConsoleLogger) {
    logger.warn("Component took lot of time to load");
  }
}

import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page</h1>
  `,
  styles: []
})
export class AboutComponent {
  constructor(logger: ConsoleLogger) {
    logger.warn("Component took lot of time to load");
  }
}

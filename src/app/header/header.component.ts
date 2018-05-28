import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="container">
  <nav class="navbar navbar-inverse">
      <div class="navbar-brand">
          My Cool App
      </div>
      <ul class="navbar-nav nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
      </ul>
  </nav>
</header>
  `,
  styles: []
})
export class HeaderComponent {}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  template: `
    <main class="grid gap-8 px-6 pt-8 md:px-8 md:pt-8">
      <app-navbar/>
      <div>
        <router-outlet/>
      </div>
    </main>
  `,
})
export class AppComponent {}

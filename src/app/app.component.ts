import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  template: `
    <main class="grid gap-8 p-6 md:p-8">
      <app-navbar/>
      <div>
        <router-outlet/>
      </div>
    </main>
  `,
})
export class AppComponent {

}

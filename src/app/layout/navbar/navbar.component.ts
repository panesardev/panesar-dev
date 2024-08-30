import { Component } from '@angular/core';
import { BLOG } from '../../app.constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  blog = BLOG;
}

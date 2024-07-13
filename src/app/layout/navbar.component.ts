import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG } from '../app.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
  ],
  template: `
    <nav class="grid grid-cols-4 justify-center items-center max-w-2xl mx-auto">
      <a class="hover:bg-white/10 rounded-lg flex justify-center items-center cursor-pointer transition-colors px-6 py-4" routerLink="/">
        <i class="w-5 h-5">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.849,7.68l-.869-.68h.021V2h-2v3.451L13.849,.637c-1.088-.852-2.609-.852-3.697,0L1.151,7.68c-.731,.572-1.151,1.434-1.151,2.363v13.957H9V15c0-.551,.448-1,1-1h4c.552,0,1,.449,1,1v9h9V10.043c0-.929-.42-1.791-1.151-2.363Zm-.849,14.32h-5v-7c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v7H2V10.043c0-.31,.14-.597,.384-.788L11.384,2.212c.363-.284,.869-.284,1.232,0l9,7.043c.244,.191,.384,.478,.384,.788v11.957Z"/></svg>
        </i>
      </a>
      <a class="hover:bg-white/10 rounded-lg flex justify-center items-center cursor-pointer transition-colors px-6 py-4" routerLink="/projects">
        <i class="w-5 h-5">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,1h-2c-1.654,0-3,1.346-3,3H8c0-1.654-1.346-3-3-3H3C1.346,1,0,2.346,0,4v2c0,1.654,1.346,3,3,3h2c.297,0,.583-.044,.854-.125l4.517,7.68c-.237,.429-.372,.921-.372,1.445v2c0,1.654,1.346,3,3,3h2c1.654,0,3-1.346,3-3v-2c0-1.654-1.346-3-3-3h-2c-.388,0-.758,.075-1.099,.209L7.478,7.689c.329-.482,.522-1.063,.522-1.689h8c0,1.654,1.346,3,3,3h2c1.654,0,3-1.346,3-3v-2c0-1.654-1.346-3-3-3ZM3,7c-.552,0-1-.449-1-1v-2c0-.551,.448-1,1-1h2c.552,0,1,.449,1,1v2c0,.551-.448,1-1,1H3Zm12,10c.552,0,1,.448,1,1v2c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1v-2c0-.552,.448-1,1-1h2Zm7-11c0,.551-.448,1-1,1h-2c-.552,0-1-.449-1-1v-2c0-.551,.448-1,1-1h2c.552,0,1,.449,1,1v2Z"/></svg>
        </i>
      </a>
      <a class="hover:bg-white/10 rounded-lg flex justify-center items-center cursor-pointer transition-colors px-6 py-4" [href]="blog.link" target="_blank">
        <i class="w-5 h-5">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,2H3C1.35,2,0,3.35,0,5V22H14.93l-2-2H2V9H22v5.93l2,2V5c0-1.65-1.35-3-3-3ZM2,7v-2c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v2H2Zm13.24,4h-4.24v4.24l7.88,7.88c.57,.57,1.32,.88,2.12,.88s1.55-.31,2.12-.88,.88-1.32,.88-2.12-.31-1.55-.88-2.12l-7.88-7.88Zm6.46,10.71c-.38,.38-1.04,.38-1.41,0l-7.29-7.29v-1.41h1.41l7.29,7.29c.19,.19,.29,.44,.29,.71s-.1,.52-.29,.71Z"/></svg>
        </i>
      </a>
      <a class="hover:bg-white/10 rounded-lg flex justify-center items-center cursor-pointer transition-colors px-6 py-4"routerLink="/info">
        <i class="w-5 h-5">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z"/><circle cx="12" cy="6.5" r="1.5"/></svg>
        </i>
      </a>
    </nav>
  `,
})
export class NavbarComponent {
  blog = BLOG;
}

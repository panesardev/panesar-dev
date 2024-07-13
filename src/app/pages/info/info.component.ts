import { Component } from '@angular/core';
import { LinksComponent } from '../../layout/links.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    LinksComponent,
  ],
  templateUrl: './info.component.html',
})
export default class InfoComponent {
}

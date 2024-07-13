import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FEATURED_ARTICLE_URL } from '../../app.constants';
import { LinksComponent } from '../../layout/links.component';
import { LoaderComponent } from '../../layout/loader.component';
import { Article } from '../../types/article';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    LinksComponent,
    NgOptimizedImage,
    LoaderComponent,
  ],
  templateUrl: './index.component.html',
})
export class IndexComponent {
  private http = inject(HttpClient);
  
  article$ = this.http.get<Article>(FEATURED_ARTICLE_URL);
}

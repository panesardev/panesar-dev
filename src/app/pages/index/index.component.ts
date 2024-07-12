import { Component, inject } from '@angular/core';
import { LinksComponent } from '../../layout/links.component';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { Article } from '../../types/article.interface';
import { FEATURED_ARTICLE_URL } from '../../app.constants';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    AsyncPipe,
    LinksComponent,
    NgOptimizedImage,
  ],
  templateUrl: './index.component.html',
})
export default class IndexComponent {
  private http = inject(HttpClient);
  
  article$ = this.http.get<Article>(FEATURED_ARTICLE_URL).pipe(
    delay(Math.floor(Math.random() * 10) + 500),
  );
  
}

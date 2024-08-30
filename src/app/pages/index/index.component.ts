import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FEATURED_ARTICLE_URL } from '../../app.constants';
import { FeaturedArticle, FeaturedArticleComponent } from "../../layout/components/featured-article/featured-article.component";
import { LinksComponent } from '../../layout/components/links/links.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    LinksComponent,
    FeaturedArticleComponent,
],
  templateUrl: './index.component.html',
})
export class IndexComponent {
  private http = inject(HttpClient);

  article$ = this.http.get<FeaturedArticle>(FEATURED_ARTICLE_URL);
}

import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { FeaturedArticle } from "../layout/components/featured-article/featured-article.component";
import { FEATURED_ARTICLE_URL } from "../app.constants";

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);

  featuredArticle$ = this.http.get<FeaturedArticle>(FEATURED_ARTICLE_URL);
}
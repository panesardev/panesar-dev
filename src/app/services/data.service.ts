import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { FEATURED_ARTICLE_URL } from "../app.constants";
import { FeaturedArticle } from "../pages/index/index.component";

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);

  featuredArticle$ = this.http.get<FeaturedArticle>(FEATURED_ARTICLE_URL);
}
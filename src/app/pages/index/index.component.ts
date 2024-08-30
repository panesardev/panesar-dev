import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeaturedArticleComponent } from "../../layout/components/featured-article/featured-article.component";
import { LinksComponent } from '../../layout/components/links/links.component';
import { DataService } from '../../services/data.service';

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
  private data = inject(DataService);

  featuredArticle$ = this.data.featuredArticle$;
}

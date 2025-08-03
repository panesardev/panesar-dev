import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinksComponent } from '../../layout/components/links/links.component';
import { LoaderComponent } from '../../layout/components/loader/loader.component';
import { DataService } from '../../services/data.service';

export interface FeaturedArticle {
  url: string;
  title: string;
  description: string;
  coverUrl: string;
  authorName: string;
  authorLink: string;
  authorImage: string;
}

@Component({
  selector: 'app-index',
  imports: [
    RouterLink,
    AsyncPipe,
    LinksComponent,
    NgOptimizedImage,
    LoaderComponent,
  ],
  templateUrl: './index.component.html'
})
export class IndexComponent {
  private data = inject(DataService);

  featuredArticle$ = this.data.featuredArticle$;
}

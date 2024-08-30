import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

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
  selector: 'app-featured-article',
  standalone: true,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    LoaderComponent,
  ],
  templateUrl: './featured-article.component.html',
})
export class FeaturedArticleComponent {
  article = input.required<FeaturedArticle>();
}

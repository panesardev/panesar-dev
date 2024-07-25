import { Component } from '@angular/core';
import { BLOG, PROJECTS } from '../../app.constants';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './projects.component.html',
})
export default class ProjectsComponent {
  blog = BLOG;
  projects = PROJECTS;
}

import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG, PROJECTS } from '../../app.constants';

export interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
  stack: string[];
}

@Component({
  selector: 'app-projects',
  imports: [
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './projects.component.html'
})
export default class ProjectsComponent {
  blog = BLOG;
  projects = PROJECTS;
}

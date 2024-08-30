import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG, PROJECTS } from '../../app.constants';
import { ProjectListComponent } from '../../layout/components/project-list/project-list.component';

export interface Project {
  name: string;
  description: string;
  link: string;
  images: string[];
  stack: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    ProjectListComponent,
  ],
  templateUrl: './projects.component.html',
})
export default class ProjectsComponent {
  blog = BLOG;
  projects = PROJECTS;
}

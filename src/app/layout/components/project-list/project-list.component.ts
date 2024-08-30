import { Component, input } from '@angular/core';
import { Project } from '../../../pages/projects/projects.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  projects = input.required<Project[]>();
}

import { Component } from '@angular/core';
import { BLOG, PROJECTS } from '../../app.constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
})
export default class ProjectsComponent {
  blog = BLOG;
  projects = PROJECTS;
}

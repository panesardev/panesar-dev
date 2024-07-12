import { Routes } from '@angular/router';
import IndexComponent from './pages/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component'),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  }
];

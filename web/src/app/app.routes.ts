import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses/courses.component').then((r) => r.CoursesComponent),
  },
];

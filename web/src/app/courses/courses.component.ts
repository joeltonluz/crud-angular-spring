import { Component, OnInit } from '@angular/core';
import { ICourse } from './model/course';
import { SHARED } from '../shared';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [SHARED],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses: ICourse[] = [
    {
      _id: '1',
      category: 'backend',
      name: 'NestJs',
    },
    {
      _id: '1',
      category: 'backend',
      name: 'NestJs',
    },
    {
      _id: '1',
      category: 'backend',
      name: 'NestJs',
    },
    {
      _id: '1',
      category: 'backend',
      name: 'NestJs',
    },
    {
      _id: '1',
      category: 'backend',
      name: 'NestJs',
    },
    {
      _id: '1',
      category: 'backend',
      name: 'NestJs',
    },
    {
      _id: '1',
      category: 'backend',
      name: 'NestJs',
    },
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}

  dataSource = this.courses;
}

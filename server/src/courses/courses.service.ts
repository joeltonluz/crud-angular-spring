import { Injectable } from '@nestjs/common';
import { ICourse } from './courses.interface';

const courses: ICourse[] = [
  { _id: '1', name: 'AngularJs', category: 'FrontEnd' },
  { _id: '2', name: 'NestJs', category: 'Backend' },
];

@Injectable()
export class CoursesService {
  async getListCourses(): Promise<ICourse[]> {
    return courses;
  }
}

import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';

const resultTemp = [
  { _id: '1', name: 'AngularJs', category: 'FrontEnd' },
  { _id: '2', name: 'NestJs', category: 'Backend' },
  { _id: '2', name: 'Flutter', category: 'Mobile' },
];

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async getListCourses() {
    return JSON.stringify(resultTemp);
  }
}

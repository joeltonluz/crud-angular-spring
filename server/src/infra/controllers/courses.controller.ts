import { Controller, Get, Inject } from '@nestjs/common';
import { FindAllCoursesUseCase } from 'src/usecases/courses/findAllCourses.usecase';
import { CoursesFactoryModule } from 'src/usecases/factories/courses.factory.module';

@Controller('courses')
export class CoursesController {
  constructor(
    @Inject(CoursesFactoryModule.FIND_ALL_COURSES)
    private readonly findAllCourses: FindAllCoursesUseCase,
  ) {}

  @Get()
  async getListCourses() {
    return this.findAllCourses.execute();
  }
}

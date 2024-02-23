import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import {
  CreateCourseUseCase,
  FindAllCoursesUseCase,
} from 'src/usecases/courses';
import { CoursesFactoryModule } from 'src/usecases/factories/courses.factory.module';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    @Inject(CoursesFactoryModule.FIND_ALL_COURSES)
    private readonly findAllCoursesUc: FindAllCoursesUseCase,
    @Inject(CoursesFactoryModule.CREATE_COURSE)
    private readonly createCourseUc: CreateCourseUseCase,
  ) {}

  @Get()
  async findAllCourses() {
    return this.findAllCoursesUc.execute();
  }

  @Post()
  async createCourse(@Body() payload: CreateCourseDto) {
    console.log(
      '🚀 ~ file: courses.controller.ts:25 ~ CoursesController ~ createCourse ~ payload:',
      payload,
    );
    return this.createCourseUc.execute(payload);
  }
}

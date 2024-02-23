import { CreateCourseDto } from 'src/infra/controllers/dto/create-course.dto';
import { CoursesM } from '../model/courses';

export interface CoursesRepository {
  findAll(): Promise<CoursesM[]>;
  create(payload: CreateCourseDto): Promise<CoursesM>;
}

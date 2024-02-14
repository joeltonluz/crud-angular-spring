import { CoursesM } from '../model/courses';

export interface CoursesRepository {
  findAll(): Promise<CoursesM[]>;
}

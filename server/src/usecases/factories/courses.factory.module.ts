import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModule } from 'src/infra/logger/logger.module';
import { LoggerService } from 'src/infra/logger/logger.service';
import { DatabaseCoursesRepository } from 'src/infra/repositories/courses.repositories';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { CreateCourseUseCase, FindAllCoursesUseCase } from '../courses';

@Module({
  imports: [LoggerModule, RepositoriesModule],
})
export class CoursesFactoryModule {
  static CREATE_COURSE = 'createCourse';
  static FIND_ALL_COURSES = 'findAllCourses';
  static register(): DynamicModule {
    return {
      module: CoursesFactoryModule,
      providers: [
        {
          inject: [LoggerService, DatabaseCoursesRepository],
          provide: CoursesFactoryModule.FIND_ALL_COURSES,
          useFactory: (
            logger: LoggerService,
            coursesRepository: DatabaseCoursesRepository,
          ) => new FindAllCoursesUseCase(logger, coursesRepository),
        },
        {
          inject: [LoggerService, DatabaseCoursesRepository],
          provide: CoursesFactoryModule.CREATE_COURSE,
          useFactory: (
            logger: LoggerService,
            coursesRepository: DatabaseCoursesRepository,
          ) => new CreateCourseUseCase(logger, coursesRepository),
        },
      ],
      exports: [
        CoursesFactoryModule.FIND_ALL_COURSES,
        CoursesFactoryModule.CREATE_COURSE,
      ],
    };
  }
}

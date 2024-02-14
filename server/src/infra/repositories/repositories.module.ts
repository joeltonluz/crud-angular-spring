import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DatabaseCoursesRepository } from './courses.repositories';

@Module({
  imports: [DatabaseModule],
  providers: [DatabaseCoursesRepository],
  exports: [DatabaseCoursesRepository],
})
export class RepositoriesModule {}

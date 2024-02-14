import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { TerminusModule } from '@nestjs/terminus';
import { CoursesFactoryModule } from 'src/usecases/factories/courses.factory.module';
import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule, CoursesFactoryModule.register()],
  controllers: [HealthController, CoursesController],
  providers: [],
})
export class ControllersModule {}

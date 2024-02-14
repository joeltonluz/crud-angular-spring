import { Module } from '@nestjs/common';
import { ControllersModule } from './infra/controllers/controllers.module';
import { LoggerModule } from './infra/logger/logger.module';

@Module({
  imports: [LoggerModule, ControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { ILogger } from 'src/domain/logger/logger.interface';
import { CoursesM } from 'src/domain/model/courses';
import { CoursesRepository } from 'src/domain/repositories';
import { CreateCourseDto } from 'src/infra/controllers/dto/create-course.dto';

export class CreateCourseUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly coursesRepository: CoursesRepository,
  ) {}

  async execute(payload: CreateCourseDto): Promise<CoursesM> {
    return await this.coursesRepository.create(payload);
  }
}

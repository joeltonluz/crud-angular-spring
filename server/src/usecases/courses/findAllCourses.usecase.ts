import { ILogger } from 'src/domain/logger/logger.interface';
import { CoursesM } from 'src/domain/model/courses';
import { CoursesRepository } from 'src/domain/repositories';

export class FindAllCoursesUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly coursesRepository: CoursesRepository,
  ) {}

  async execute(): Promise<CoursesM[]> {
    return await this.coursesRepository.findAll();
  }
}

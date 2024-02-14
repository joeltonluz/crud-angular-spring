import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { CoursesM } from 'src/domain/model/courses';
import { CoursesRepository } from 'src/domain/repositories';

@Injectable()
export class DatabaseCoursesRepository implements CoursesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<CoursesM[]> {
    const result = await this.prismaService.courses.findMany();

    return result;
  }
}

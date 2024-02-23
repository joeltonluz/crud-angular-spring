import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { CoursesM } from 'src/domain/model/courses';
import { CoursesRepository } from 'src/domain/repositories';
import { CreateCourseDto } from '../controllers/dto/create-course.dto';

@Injectable()
export class DatabaseCoursesRepository implements CoursesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<CoursesM[]> {
    const result = await this.prismaService.courses.findMany();

    return result;
  }

  async create(payload: CreateCourseDto): Promise<CoursesM> {
    console.log(
      '🚀 ~ file: courses.repositories.ts:18 ~ DatabaseCoursesRepository ~ create ~ payload:',
      payload,
    );
    const result = await this.prismaService.courses.create({
      data: {
        name: 'Teste',
        category: 'Teste',
      },
    });

    return result;
  }
}

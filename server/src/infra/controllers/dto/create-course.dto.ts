import { IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty({ message: 'Necessário digitar nome do curso' })
  name: string;

  @IsNotEmpty({ message: 'Necessário informar a categoria!' })
  category: string;
}

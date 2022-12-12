import { IsNotEmpty } from 'class-validator';

export class CreateRestuarantDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  cafeteriaId: string;
}

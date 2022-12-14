import { IsNotEmpty, IsNumber, Max, Min, MinLength } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  restaurantId: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  price: number;

  @IsNotEmpty()
  @MinLength(10)
  comment: string;

  @IsNotEmpty()
  menu: string;
}

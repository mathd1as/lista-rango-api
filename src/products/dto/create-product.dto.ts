import { IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  png_link: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  value: number;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  promotion: boolean;

  @IsNotEmpty()
  restaurant: string;

  description?: string;

  promotionalValue?: number;

  promotionalTime?: string;
}

import { IsNotEmpty } from 'class-validator';
export class CreateRestaurantDto {
  @IsNotEmpty()
  png_link: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  opening_hours: string;

  @IsNotEmpty()
  restaurant_unique_mame: string;
}

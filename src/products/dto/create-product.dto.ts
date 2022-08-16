export class CreateProductDto {
  png_link: string;
  name: string;
  value: number;
  category: string;
  promotion: boolean;
  description?: string;
}

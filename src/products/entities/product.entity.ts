import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  value: string;

  @Prop()
  png_link: string;

  @Prop()
  category: string;

  @Prop()
  promotion: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

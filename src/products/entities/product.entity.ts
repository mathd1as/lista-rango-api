import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';

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

  @Prop({ required: false })
  description?: boolean;

  @Prop({ required: false })
  promotional_value?: boolean;

  @Prop({ required: false })
  promotional_time?: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'RestaurantSchema' })
  restaurant: Restaurant;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

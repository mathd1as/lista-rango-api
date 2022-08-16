import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  png_link: string;

  @Prop()
  opening_hours: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);

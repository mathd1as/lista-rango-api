import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant, RestaurantDocument } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}
  create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = new this.restaurantModel(createRestaurantDto);
    return restaurant.save();
  }

  findAll() {
    return this.restaurantModel.find();
  }

  findOne(id: string) {
    return this.restaurantModel.findById(id);
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: string) {
    return this.restaurantModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}

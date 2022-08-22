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

  async create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = await this.restaurantModel
      .find({
        restaurant_unique_mame: createRestaurantDto.restaurant_unique_mame,
      })
      .exec();

    if (restaurant.length > 0) throw new Error('Restaurant already exists'); //Criar erro personalizado
    const newRestaurant = new this.restaurantModel(createRestaurantDto);
    return newRestaurant.save();
  }

  async findAll() {
    const restaurantsCollection = await this.restaurantModel.find().exec();
    const restaurants = [];

    for (const element of restaurantsCollection) {
      restaurants.push({
        id: element._id,
        name: element.name,
      });
    }

    return restaurants;
  }

  findOne(id: string) {
    return this.restaurantModel.findById(id);
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantModel.findByIdAndUpdate(
      { _id: id },
      { updateRestaurantDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.restaurantModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}

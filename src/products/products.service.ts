import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  async findAllRestaurantProducts(id: string) {
    const products = await this.productModel.find({ restaurant: id });
    return products;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(
      { _id: id },
      { updateProductDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.productModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}

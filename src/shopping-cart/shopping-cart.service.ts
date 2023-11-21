import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ShoppingCart } from './schemas/shopping-cart.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart.name)
    private shoppingCartModel: mongoose.Model<ShoppingCart>,
  ) {}

  async create(shoppingCart: ShoppingCart): Promise<ShoppingCart> {
    const res = await this.shoppingCartModel.create(shoppingCart);
    return res;
  }

  async findAll(): Promise<ShoppingCart[]> {
    const res = await this.shoppingCartModel.find();
    return res;
  }

  async findById(id: string): Promise<ShoppingCart> {
    const res = await this.shoppingCartModel.findById(id);
    if (!res) {
      throw new NotFoundException('Item not found!');
    }
    return res;
  }

  async updateById(
    id: string,
    shoppingCart: ShoppingCart,
  ): Promise<ShoppingCart> {
    const res = await this.shoppingCartModel.findByIdAndUpdate(
      id,
      shoppingCart,
      { new: true, runValidators: true },
    );
    return res;
  }

  async deleteById(id: string): Promise<ShoppingCart> {
    return await this.shoppingCartModel.findByIdAndDelete(id);
  }
}

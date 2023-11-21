import { UpdatedShoppingCartDto } from './dto/update-shoppingCart.dto';
import { ShoppingCartService } from './shopping-cart.service';
import { Body, Controller, Param, Patch, Post, Get } from '@nestjs/common';
import { CreateShoppingCartDto } from './dto/create-shoppingCart.dto';
import { ShoppingCart } from './schemas/shopping-cart.schema';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private shoppingCartService: ShoppingCartService) {}
  @Post()
  async createShoppingCart(
    @Body()
    shoppingCartDto: CreateShoppingCartDto,
  ): Promise<ShoppingCart> {
    return this.shoppingCartService.create(shoppingCartDto);
  }

  @Patch(':id')
  async updateShoppingCart(
    @Param('id')
    id: string,
    @Body()
    shoppingCartDto: UpdatedShoppingCartDto,
  ): Promise<ShoppingCart> {
    return this.shoppingCartService.updateById(id, shoppingCartDto);
  }

  @Get()
  async getShoppingCart(): Promise<ShoppingCart[]> {
    return this.shoppingCartService.findAll();
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<ShoppingCart> {
    return this.shoppingCartService.findById(id);
  }
}

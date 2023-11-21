import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class ShoppingCart {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  imgFeature: string;

  @Prop({
    type: Number,
    required: true,
  })
  price: number;

  @Prop({
    type: Number,
    required: true,
  })
  quantity: number;

  @Prop({ type: Date, default: Date.now })
  created: Date;
}

export const ShoppingCartSchema = SchemaFactory.createForClass(ShoppingCart);

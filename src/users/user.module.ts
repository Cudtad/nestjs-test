import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from './schemas/user.schema';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

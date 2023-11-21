import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';

import { UserService } from '../users/user.service';
import { Payload } from '../types/payload';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() userDTO: LoginDTO,
  ) {
    const user = await this.userService.findByLogin(userDTO);
    const payload: Payload = {
      id: user._id,
      username: user.username,
      seller: user.seller,
    };
    const accessToken = await this.authService.signPayload(payload);
    res.cookie('access-token', accessToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    return { user };
  }

  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    const user = await this.userService.create(userDTO);
    // const payload: Payload = {
    //   id: user._id,
    //   username: user.username,
    //   seller: user.seller,
    // };
    // const token = await this.authService.signPayload(payload);
    return { user };
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req) {
    const userInfo = await this.userService.findById(req.user.id);
    return { ...this.userService.getUserDetails(userInfo) };
  }
}

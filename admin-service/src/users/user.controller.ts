import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  async getUserById(@Param('userId') userId: string) {
    return this.userService.findUserById(userId);
  }

  @Post()
  async createUser(@Body() userData: { nickname: string }) {
    return this.userService.createUser(userData);
  }
}

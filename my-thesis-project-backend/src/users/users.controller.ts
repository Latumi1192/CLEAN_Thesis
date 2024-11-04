import { Controller, Post, Body, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../users/datatypes/Role';
import { RolesGuard } from '../auth/roles.guard';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async create(@Res() response: Response, @Body() userDto: CreateUserDto) {
    try {
      const result = await this.usersService.createUser(userDto);
      return response.status(HttpStatus.CREATED).json({
        message: '',
        error: false,
        data: result
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null
      });
    }
  }
}

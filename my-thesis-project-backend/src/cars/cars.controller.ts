import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/creat-cars.dto';

@ApiTags()
@Controller()
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Post()
  async create(@Res() response: Response, @Body() createCarDto: CreateCarDto) {
    try {
      const result = await this.carService.create(createCarDto);
      return response.status(HttpStatus.CREATED).json({
        message: '',
        error: false,
        data: result,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }

  @Get('cars')
  async findAll(@Res() response: Response) {
    try {
      const result = await this.carService.findAll();
      return response.status(HttpStatus.OK).json({
        message: '',
        error: false,
        data: result,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }

  @Get('brands')
  async findAllBrands(@Res() response: Response) {
    try {
      const result = await this.carService.findAllBrands();
      return response.status(HttpStatus.OK).json({
        message: '',
        error: false,
        data: result,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }

  @Get('brand/:brand')
  async findAllFrom(@Res() response: Response, @Param('brand') brand: string) {
    try {
      const result = await this.carService.findAllFrom(brand);
      return response.status(HttpStatus.OK).json({
        message: '',
        error: false,
        data: result,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }

  @Delete('id/:id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      const result = await this.carService.remove(id);
      if (!result) {
        throw Error('ID not found');
      }
      return response.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: [error.message],
        error: true,
        data: null,
      });
    }
  }

  @Delete('deleteAll')
  async deleteAll() {
    return this.carService.deleteAllCars();
  }
}

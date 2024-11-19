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
import { BrandsService } from './brands.service';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandService: BrandsService) {}

  @Get('')
  async findAllBrands(@Res() response: Response) {
    try {
      const result = await this.brandService.findAllBrands();
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

  @Get(':brand')
  async findAllFrom(@Res() response: Response, @Param('brand') brand: string) {
    try {
      const result = await this.brandService.findAllFrom(brand);
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
}

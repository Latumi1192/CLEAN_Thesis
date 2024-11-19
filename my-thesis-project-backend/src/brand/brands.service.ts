import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand, BrandDocument } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name) private brandModel: Model<BrandDocument>,
  ) {}

  async findAllBrands() {
    return this.brandModel.distinct('brand').exec();
  }

  async findAllFrom(brand: string) {
    return this.brandModel.find({ brand: brand }).exec();
  }
}

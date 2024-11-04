import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './entities/car.entity';
import { CreateCarDto } from './dto/creat-cars.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async create(createCarDto: CreateCarDto) {
    const createdCar = new this.carModel(createCarDto);
    return createdCar.save();
  }

  async findAll() {
    return this.carModel.find().exec();
  }

  async findOne(id: string) {
    return this.carModel.find({ _id: id });
  }

  async findAllBrands() {
    return this.carModel.distinct('brand').exec();
  }

  async findAllFrom(brand: string) {
    return this.carModel.find({ brand: brand }).exec();
  }

  remove(id: string) {
    return this.carModel.findOneAndDelete({ _id: id });
  }

  async deleteAllCars(): Promise<any> {
    return this.carModel.deleteMany({}).exec();
  }
}

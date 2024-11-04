import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car } from './entities/car.entity';
import { CarSchema } from './entities/car.entity';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}

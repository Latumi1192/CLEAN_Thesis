import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';
import { config } from 'config';

const mongoURI = config.mongoURI;

@Module({
  imports: [MongooseModule.forRoot(mongoURI), CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

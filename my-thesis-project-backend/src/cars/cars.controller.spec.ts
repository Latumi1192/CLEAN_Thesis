import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/creat-cars.dto';
import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import * as httpMocks from 'node-mocks-http';
import * as mongoose from 'mongoose';

describe('CarsController', () => {
  let carsController: CarsController;
  let carsService: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [
        {
          provide: CarsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findAllBrands: jest.fn(),
            findAllFrom: jest.fn(),
            remove: jest.fn(),
            deleteAllCars: jest.fn(),
          },
        },
      ],
    }).compile();

    carsController = module.get<CarsController>(CarsController);
    carsService = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(carsController).toBeDefined();
  });

  describe('create', () => {
    it('should create a car and return the created car data', async () => {
      // Mock a complete CarDocument object
      const mockCar: any = {
        _id: new mongoose.Types.ObjectId().toString(), // Convert ObjectId to string for test
        brand: 'Toyota',
        name: 'Corolla',
        price: 20000,
        leasingrate: 150,
        availability: true,
        iD: 'uniqueID',
        count: 1,
        __v: 0,
      };

      jest.spyOn(carsService, 'create').mockResolvedValue(mockCar);

      const response = httpMocks.createResponse();
      await carsController.create(response, mockCar as CreateCarDto);

      expect(response.statusCode).toEqual(HttpStatus.CREATED);
      expect(response._getJSONData()).toEqual({
        message: '',
        error: false,
        data: {
          ...mockCar, // Spread the rest of the mockCar properties
          _id: mockCar._id, // Ensure _id is a string here
        },
      });
    });

    it('should return a BAD_REQUEST status if there is an error', async () => {
      const mockCar: CreateCarDto = {
        brand: 'Toyota',
        name: 'Corolla',
        price: 2000,
        leasingrate: 1500,
        availability: true,
        iD: 'ID001',
        count: 20,
      };
      const mockResponse = { json: jest.fn() };
      jest
        .spyOn(carsService, 'create')
        .mockRejectedValue(new Error('Some error'));

      const response = httpMocks.createResponse();
      await carsController.create(response, mockCar);

      expect(response.statusCode).toEqual(HttpStatus.BAD_REQUEST);
      expect(response._getJSONData()).toEqual({
        message: ['Some error'],
        error: true,
        data: null,
      });
    });
  });
  describe('findAll', () => {
    it('should return all cars with HTTP status 200', async () => {
      const mockCars: any = {
        _id: new mongoose.Types.ObjectId().toString(), // Convert ObjectId to string for test
        brand: 'Toyota',
        name: 'Corolla',
        price: 20000,
        leasingrate: 150,
        availability: true,
        iD: 'CAR123',
        count: 10,
        __v: 0,
      };

      // Create a mock response object
      const response = httpMocks.createResponse();

      // Mock the findAll method to return mockCars
      jest.spyOn(carsService, 'findAll').mockResolvedValue(mockCars);

      // Call the controller's findAll method
      await carsController.findAll(response);

      // Assert the expected behavior
      expect(response.statusCode).toBe(HttpStatus.OK);
      expect(response._getJSONData()).toEqual({
        message: '',
        error: false,
        data: mockCars,
      });
    });

    it('should return a 400 Bad Request if there is an error', async () => {
      // Simulate an error
      const errorMessage = 'Database error';
      jest
        .spyOn(carsService, 'findAll')
        .mockRejectedValue(new Error(errorMessage));

      const response = httpMocks.createResponse();
      await carsController.findAll(response);

      // Assert that the error response is returned
      expect(response.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(response._getJSONData()).toEqual({
        message: [errorMessage],
        error: true,
        data: null,
      });
    });
  });
  // Additional tests for other endpoints (e.g., findAll, findAllBrands, etc.)
});

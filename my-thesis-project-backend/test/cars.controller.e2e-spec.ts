import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CarsModule } from 'src/cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpStatus } from '@nestjs/common';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('CarsController (e2e)', () => {
  let app: INestApplication;
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri), // Use an in-memory MongoDB for testing
        CarsModule, // Import CarsModule here
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await mongoServer.stop();
    await app.close();
  });

  it('/POST car', async () => {
    const carData = {
      brand: 'Toyota',
      name: 'Camry',
      price: 30000,
      leasingrate: 300,
      availability: true,
      iD: 'CAR123',
      count: 5,
    };

    const response = await request(app.getHttpServer())
      .post('/cars') // Ensure the route is correct
      .send(carData)
      .expect(HttpStatus.CREATED); // Expect HTTP status 201 Created

    expect(response.body).toMatchObject({
      message: '',
      error: false,
      data: expect.objectContaining({
        brand: 'Toyota',
        name: 'Camry',
        price: 30000,
      }),
    });
  });

  it('/GET cars', async () => {
    const response = await request(app.getHttpServer())
      .get('/cars') // Ensure the route is correct
      .expect(HttpStatus.OK); // Expect HTTP status 200 OK

    expect(response.body).toMatchObject({
      message: '',
      error: false,
      data: expect.any(Array),
    });
  });

  it('/GET brands', async () => {
    const response = await request(app.getHttpServer())
      .get('/brands') // Ensure the route is correct
      .expect(HttpStatus.OK); // Expect HTTP status 200 OK

    expect(response.body).toMatchObject({
      message: '',
      error: false,
      data: expect.any(Array),
    });
  });

  it('/DELETE id/:id', async () => {
    const carId = 'some-valid-id'; // Replace with a real ID from the DB or mock data
    const response = await request(app.getHttpServer())
      .delete(`/cars/id/${carId}`)
      .expect(HttpStatus.NO_CONTENT); // Expect HTTP status 204 No Content

    // You can also add further assertions if needed
  });
});

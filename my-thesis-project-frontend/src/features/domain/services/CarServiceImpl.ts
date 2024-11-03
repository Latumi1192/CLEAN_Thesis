import { Car } from "../dto/CarDTO";
import { CarService } from "./CarService";
import { CarRepositoryImpl } from "@/features/data/CarRepositoryImpl";

export class CarServiceImpl implements CarService {
  CarRepo = new CarRepositoryImpl();
  getCarName(car: Car): String {
    return this.CarRepo.getCarName(car);
  }
  deleteCar(car: Car): boolean {
    return this.CarRepo.deleteCar(car);
  }
  getCarByName(name: String): Promise<Car | null> {
    return Promise.resolve(this.CarRepo.getCarByName(name));
  }
  addCarIntoDatabase(car: Car): boolean {
    return this.CarRepo.addCarIntoDatabase(car);
  }
  editCar(name: String, placeholder: String): boolean {
    throw new Error("Method not implemented.");
  }
}

import { Car } from "../dto/CarDTO";

export interface CarService {
  deleteCar(car: Car): boolean;
  addCarIntoDatabase(car: Car): Promise<boolean>;
  getAllCarFromBrand(brand: String): Promise<Car[]>;
  getAllBrand(): Promise<String[]>;
}

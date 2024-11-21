import { Car } from "../domain/dto/CarDTO";

export interface CarRepository {
  deleteCar(car: Car): boolean;
  addCarIntoDatabase(car: Car): Promise<boolean>;
  getAllCarFromBrand(brand: String): Promise<Car[]>;
}

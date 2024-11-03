import { Car } from "../domain/dto/CarDTO";

export interface CarRepository {
  getCarName(car: Car): String;
  deleteCar(car: Car): boolean;
  getCarByName(name: String): Promise<Car | null>;
  addCarIntoDatabase(car: Car): boolean;
  //placeholder
  editCar(name: String, placeholder: String): boolean;
}

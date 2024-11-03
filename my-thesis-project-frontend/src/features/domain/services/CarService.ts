import { Car } from "../dto/CarDTO";

export interface CarService {
  getCarName(car: Car): String;
  deleteCar(car: Car): boolean;
  getCarByName(name: String): Promise<Car | null>;
  addCarIntoDatabase(car: Car): boolean;
  //placeholder
  editCar(name: String, placeholder: String): boolean;
}

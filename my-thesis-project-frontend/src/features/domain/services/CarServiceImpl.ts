import { Car } from "../dto/CarDTO";
import { CarService } from "./CarService";
import { CarRepositoryImpl } from "@/features/data/CarRepositoryImpl";

export class CarServiceImpl implements CarService {
  CarRepo = new CarRepositoryImpl();

  async getAllCarFromBrand(brand: String): Promise<Car[]> {
    try {
      const data = await this.CarRepo.getAllCarFromBrand(brand);
      console.log(data);
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
      return [];
    }
  }

  deleteCar(car: Car): boolean {
    return this.CarRepo.deleteCar(car);
  }

  addCarIntoDatabase(car: Car): Promise<boolean> {
    return this.CarRepo.addCarIntoDatabase(car);
  }
}

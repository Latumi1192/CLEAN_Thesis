import { carList } from "../LocalDatabase";
import { Car } from "../domain/dto/CarDTO";
import { CarRepository } from "./CarRepository";

export class CarRepositoryImpl implements CarRepository {
  getCarName(car: Car): String {
    return car.carname;
  }
  deleteCar(car: Car): boolean {
    for (let i = 0; i < carList.length; i++) {
      if (
        car.brand === carList[i].brand &&
        car.carname === carList[i].carname
      ) {
        carList.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  getCarByName(name: String): Promise<Car | null> {
    for (let i = 0; i < carList.length; i++) {
      if (name === carList[i].carname) return Promise.resolve(carList[i]);
    }
    return Promise.resolve(null);
  }
  editCar(name: String, placeholder: String): boolean {
    throw new Error("Method not implemented.");
  }

  addCarIntoDatabase(car: Car): boolean {
    for (let i = 0; i < carList.length; i++) {
      if (car.brand === carList[i].brand && car.carname === carList[i].carname)
        return false;
    }
    carList.push(car);
    return true;
  }
}

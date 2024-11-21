import { carList } from "../LocalDatabase";
import { Car } from "../domain/dto/CarDTO";
import { CarRepository } from "./CarRepository";
import axios from "axios";
const backendURL = "http://localhost:3000/";

export class CarRepositoryImpl implements CarRepository {
  async getAllCarFromBrand(brand: String): Promise<Car[]> {
    try {
      const response = await axios.get(`${backendURL}brand/${brand}`);
      if (response.status === 200) {
        const data = response.data as String[];
        console.log(data.data);
        const tmp = data.data as Car[];
        return tmp;
      } else {
        console.error("Request failed:", response.data.message);
        return [];
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return [];
    }
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

  async addCarIntoDatabase(car: Car): Promise<boolean> {
    try {
      const response = await axios.post(backendURL, car);
      console.log("Car created successfully:", response.data);
      return true;
    } catch (error: any) {
      console.error(
        "Error creating car:",
        error.response?.data || error.message
      );
    }
    return false;
  }
}

import { Car } from "../domain/dto/CarDTO";
import { Brand } from "../domain/dto/BrandDTO";
import { BrandRepository } from "./BrandRepository";
import { carList } from "../LocalDatabase";
//import axios from "axios";

const backendURL = "http://localhost:3000/";

export class BrandRepositoryImpl implements BrandRepository {
  tmpCarList = carList; //will be replaced by API call later

  getAllBrand(): String[] {
    var brandList: String[] = [];
    for (let i = 0; i < carList.length; i++) {
      if (brandList.indexOf(carList[i].brand) === -1)
        brandList.push(carList[i].brand);
    }
    return brandList;
  }

  //   async getAllBrand(): Promise<String[]> {
  //     try {
  //       const response = await axios.get(`${backendURL}brands`);
  //       if (response.status === 200) {
  //         const data = response.data as String[];
  //         return data;
  //       } else {
  //         console.error("Request failed:", response.data.message);
  //         return [];
  //       }
  //     } catch (error) {
  //       console.error("An error occurred:", error);
  //       return [];
  //     }
  //   }

  getAllCarFromBrand(brandname: String): Car[] {
    var tmpCarArray: Car[] = [];
    for (let i = 0; i < carList.length; i++) {
      if (carList[i].brand === brandname) {
        tmpCarArray.push(carList[i]);
      }
    }
    return tmpCarArray;
  }

  deleteBrand(brandname: String): void {
    for (let i = 0; i < carList.length; i++) {
      if (carList[i].brand === brandname) {
        carList.splice(i, 1);
      }
    }
  }

  editCar(placeholder: String): boolean {
    throw new Error("Method not implemented.");
  }
}

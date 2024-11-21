import { Car } from "../domain/dto/CarDTO";

export interface BrandRepository {
  getAllBrand(): Promise<String[]>;
  // getAllBrand(): String[];
  getAllCarFromBrand(brandname: String): Array<Car>;
  deleteBrand(brandname: String): void;
}

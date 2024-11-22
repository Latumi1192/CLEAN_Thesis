// Import các lớp và mô-đun cần thiết
import { CarServiceImpl } from "@/features/domain/services/CarServiceImpl";
import { CarRepositoryImpl } from "@/features/data/CarRepositoryImpl";
import { Car } from "@/features/domain/dto/CarDTO";

// Mock CarRepositoryImpl để không gọi API thực tế
jest.mock("@/features/data/CarRepositoryImpl");

describe("CarServiceImpl", () => {
  let carService: CarServiceImpl;
  let carRepoMock: jest.Mocked<CarRepositoryImpl>;

  beforeEach(() => {
    // Tạo mock CarRepositoryImpl
    carRepoMock = new CarRepositoryImpl() as jest.Mocked<CarRepositoryImpl>;
    carService = new CarServiceImpl();
    // Gán repository mock vào CarServiceImpl
    carService.CarRepo = carRepoMock;
  });

  it("should return car data when getAllCarFromBrand is called with a valid brand", async () => {
    const mockBrand = "Toyota";
    const mockCarData: Car[] = [
      {
        carname: "Car 1",
        brand: "Toyota",
        price: 2000,
        leasingrate: 20,
        availability: true,
        ID: "c1",
        count: 10,
      },
      {
        carname: "Car 2",
        brand: "Toyota",
        price: 2500,
        leasingrate: 30,
        availability: true,
        ID: "c2",
        count: 20,
      },
    ];

    // Mock phương thức getAllCarFromBrand của CarRepositoryImpl
    carRepoMock.getAllCarFromBrand.mockResolvedValue(mockCarData);

    // Gọi phương thức getAllCarFromBrand và kiểm tra kết quả
    const result = await carService.getAllCarFromBrand(mockBrand);

    // Kiểm tra xem dữ liệu có đúng không
    expect(result).toEqual(mockCarData);
    expect(carRepoMock.getAllCarFromBrand).toHaveBeenCalledWith(mockBrand); // Kiểm tra rằng repository được gọi với đúng tham số
  });

  it("should return an empty array when an error occurs in getAllCarFromBrand", async () => {
    const mockBrand = "Ford";

    // Mock phương thức getAllCarFromBrand của CarRepositoryImpl để ném lỗi
    carRepoMock.getAllCarFromBrand.mockRejectedValue(new Error("API error"));

    // Gọi phương thức getAllCarFromBrand và kiểm tra kết quả
    const result = await carService.getAllCarFromBrand(mockBrand);

    // Kiểm tra rằng phương thức trả về mảng rỗng khi có lỗi
    expect(result).toEqual([]);
    expect(carRepoMock.getAllCarFromBrand).toHaveBeenCalledWith(mockBrand); // Kiểm tra rằng repository được gọi với đúng tham số
  });
});

import { UserRepositoryImpl } from "@/features/data/UserRepositoryImpl";
import { User } from "../dto/UserDTO";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  submitAuth(user: User): boolean {
    return this.userRepo.submitAuth(user);
  }
}

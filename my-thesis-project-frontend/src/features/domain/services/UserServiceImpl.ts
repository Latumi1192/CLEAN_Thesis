import { UserRepositoryImpl } from "@/features/data/UserRepositoryImpl";
import { User } from "../dto/UserDTO";
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  userRepo = new UserRepositoryImpl();
  async login(user: User): Promise<void> {
    return this.userRepo.login(user);
  }
}

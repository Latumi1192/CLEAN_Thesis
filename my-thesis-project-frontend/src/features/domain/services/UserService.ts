import { User } from "../dto/UserDTO";

export interface UserService {
  login(user: User): Promise<void>;
}

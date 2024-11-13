import { User } from "../dto/UserDTO";

export interface UserService {
  submitAuth(user: User): boolean;
}

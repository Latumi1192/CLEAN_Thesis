import { User } from "../domain/dto/UserDTO";
export interface UserRepository {
  submitAuth(user: User): boolean;
}

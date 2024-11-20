import { User } from "../domain/dto/UserDTO";
export interface UserRepository {
  login(user: User): Promise<void>;
}

import { User } from "../domain/dto/UserDTO";
import { UserRepository } from "./UserRepository";

export class UserRepositoryImpl implements UserRepository {
  submitAuth(user: User): boolean {
    console.log(
      "UserRepository method call with Account: " +
        user.account +
        " and " +
        user.password
    );
    return true;
  }
}

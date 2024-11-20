import { User } from "../domain/dto/UserDTO";
import { UserRepository } from "./UserRepository";
import axios from "axios";

export class UserRepositoryImpl implements UserRepository {
  async login(user: User): Promise<void> {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username: user.account,
        password: user.password,
      });

      const { access_token } = response.data;

      localStorage.setItem("access_token", access_token);

      console.log("Login successful, token:", access_token);
    } catch (error: any) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
    }
  }
}

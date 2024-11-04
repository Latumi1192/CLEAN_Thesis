import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(username: string): Promise<CreateUserDto | undefined> {
    const res = await this.userModel.findOne({ username: username });
    return res ? this.maptoDto(res) : null;
  }

  async createUser(userDto: CreateUserDto) {
    const toCreateUserDto = { ...userDto, password: await this.hashPassword(userDto.password) };
    const createdUser = new this.userModel(toCreateUserDto);
    return createdUser.save();
  }

  private maptoDto(user: UserDocument): CreateUserDto {
    return <CreateUserDto>{
      username: user.username,
      password: user.password,
      role: user.role
    };
  }

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
}

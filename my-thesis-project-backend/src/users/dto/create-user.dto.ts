import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Role } from '../datatypes/Role';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Username muss angegeben werden' })
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Password muss angegeben werden' })
  password: string;

  @ApiProperty({ enum: Role, enumName: 'Role' })
  role: Role;
}

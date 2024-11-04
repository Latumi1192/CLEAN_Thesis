import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../datatypes/Role';

export class UserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  role: Role;
}

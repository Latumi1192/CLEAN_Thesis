import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class BrandDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must present' })
  name: string;

  @ApiProperty()
  @IsArray()
  carList: String[];
}

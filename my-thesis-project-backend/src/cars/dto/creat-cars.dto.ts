import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCarDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must present' })
  brand: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must present' })
  carname: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  leasingrate: number;

  @ApiProperty()
  availability: boolean;

  @ApiProperty()
  iD: string;

  @ApiProperty()
  count: number;
}

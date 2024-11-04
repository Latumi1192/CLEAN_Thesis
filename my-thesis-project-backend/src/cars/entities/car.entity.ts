import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  leasingrate: number;

  @Prop()
  availability: boolean;

  @Prop()
  iD: string;

  @Prop()
  count: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);

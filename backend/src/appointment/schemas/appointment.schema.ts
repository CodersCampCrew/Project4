import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IAppointment } from '../interfaces/appointment.interface';
import { Document } from 'mongoose';

export type AppointmentDocument = IAppointment & Document;

@Schema()
export class Appointment {
  @Prop()
  teacherId: string;
  @Prop()
  studentName: string;
  @Prop()
  parentName: string;
  @Prop()
  studentEmail: string;
  @Prop()
  kinship: string;
  @Prop()
  studentPhone: string;
  @Prop()
  parentPhone: string;
  @Prop()
  schoolType: string;
  @Prop()
  class: string;
  @Prop()
  localization: string;
  @Prop()
  prizeTime: string;
  @Prop()
  prize: string;
  @Prop()
  address: string;
  @Prop()
  isLessonRegular: boolean;
  @Prop()
  weekDay: [];
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

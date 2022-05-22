import { Document } from 'mongoose';
export interface IAppointment extends Document {
  readonly _id?: string;
  readonly studentName: string;
  readonly parentName: string;
  readonly kinship: string;
  readonly studentPhone: string;
  readonly parentPhone: string;
  readonly schoolType: string;
  readonly class: string;
  readonly localization: string;
  readonly prizeTime: string;
  readonly prize: string;
  readonly address: string;
  readonly isLessonRegular: boolean;
  readonly weekDay: string;
  readonly timeOfLesson: string;
  readonly startHour: string;
  readonly startMinute: string;
}

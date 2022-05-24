import { Document } from 'mongoose';
export interface IAppointment extends Document {
  readonly _id?: string;
  readonly teacherId?: string;
  readonly studentName: string;
  readonly parentName: string;
  readonly studentEmail: string;
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
  readonly lessons: [];
}

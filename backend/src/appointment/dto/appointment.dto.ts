import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  readonly studentName: string;
  @IsString()
  @IsNotEmpty()
  readonly parentName: string;
  @IsString()
  @IsNotEmpty()
  readonly kinship: string;
  @IsString()
  @IsNotEmpty()
  readonly studentPhone: string;
  @IsString()
  @IsNotEmpty()
  readonly parentPhone: string;
  @IsString()
  @IsNotEmpty()
  readonly schoolType: string;
  @IsString()
  @IsNotEmpty()
  readonly class: string;
  @IsString()
  @IsNotEmpty()
  readonly localization: string;
  @IsString()
  @IsNotEmpty()
  readonly prizeTime: string;
  @IsString()
  @IsNotEmpty()
  readonly prize: string;
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @IsNotEmpty()
  readonly isLessonRegular: boolean;
  @IsString()
  @IsNotEmpty()
  readonly weekDay: string;
  @IsString()
  @IsNotEmpty()
  readonly timeOfLesson: string;
  @IsString()
  @IsNotEmpty()
  readonly startHour: string;
  @IsString()
  @IsNotEmpty()
  readonly startMinute: string;
}

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {}

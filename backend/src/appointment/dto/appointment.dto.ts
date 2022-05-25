import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Date } from 'mongoose';

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'studentName' })
  readonly studentName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'PArentname' })
  readonly parentName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'studentEmail' })
  readonly studentEmail: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'kinship' })
  readonly kinship: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'studentPhone' })
  readonly studentPhone: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'parentPhone' })
  readonly parentPhone: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'schoolType' })
  readonly schoolType: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'class' })
  readonly class: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'localization' })
  readonly localization: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'prizeTime' })
  readonly prizeTime: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'prize' })
  readonly prize: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'address' })
  readonly address: string;
  @IsNotEmpty()
  @ApiProperty({ type: Boolean, description: 'isLessonRegular' })
  readonly isLessonRegular: boolean;
  @IsNotEmpty()
  @ApiProperty({ type: Array, description: 'lessons' })
  readonly lessons: lessons[];
}

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {}

export class lessons {
  day: number;
  startTime: string;
  duration: string;
}

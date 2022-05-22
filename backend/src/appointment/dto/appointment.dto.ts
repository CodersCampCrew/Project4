import { PartialType } from '@nestjs/mapped-types';

export class CreateAppointmentDto {}

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {}

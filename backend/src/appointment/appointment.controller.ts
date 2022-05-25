import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Headers,
} from '@nestjs/common';
import RequestWithUser from '../middleware/requestwithcontext.interface';
import { AppointmentService } from './appointment.service';
import { ApiCreatedResponse, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
  CreateAppointmentDto,
  UpdateAppointmentDto,
} from './dto/appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post('create')
  @ApiCreatedResponse({ description: 'Appointment Create' })
  @ApiBody({ type: CreateAppointmentDto })
  create(
    @Body() createAppointmentDto: CreateAppointmentDto,
    @Req() req: RequestWithUser,
    @Headers() headers,
  ) {
    console.log(headers);
    return this.appointmentService.createAppointment(createAppointmentDto, req);
  }

  @Get()
  @ApiOkResponse({ description: 'Get All Appointments' })
  @ApiBody({ type: CreateAppointmentDto })
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Get one Appointment' })
  @ApiBody({ type: CreateAppointmentDto })
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Appointment patched' })
  @ApiBody({ type: CreateAppointmentDto })
  update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Appointment delete' })
  @ApiBody({ type: CreateAppointmentDto })
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MailService } from '../mail/mail.service';
import RequestWithUser from '../middleware/requestwithcontext.interface';
import {
  CreateAppointmentDto,
  UpdateAppointmentDto,
} from './dto/appointment.dto';
import { IAppointment } from './interfaces/appointment.interface';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel('Appointment') private appointmentModel: Model<IAppointment>,
    private mailService: MailService,
  ) {}

  public async createAppointment(
    createAppointmentDto: CreateAppointmentDto,
    req: RequestWithUser,
  ) {
    const newAppointment = new this.appointmentModel({
      ...createAppointmentDto,
      teacherId: req.cookies.TokenData.user_id,
    });
    await newAppointment.save();
    await this.mailService.sendAppointmentInfo(newAppointment);
    return newAppointment;
  }

  findAll() {
    return `This action returns all appointment`;
  }

  findOne(id: string) {
    return `This action returns a #${id} appointment`;
  }

  update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: string) {
    return `This action removes a #${id} appointment`;
  }
}

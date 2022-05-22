import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}

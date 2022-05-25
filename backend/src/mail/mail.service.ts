import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import { IUser } from '../user/interfaces/user.interface';
import { IAppointment } from '../appointment/interfaces/appointment.interface';
@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: IUser, emailToken: string) {
    const url = `http://localhost:3000/verifyEmail?token=${user.emailToken}`;

    await this.mailerService.sendMail({
      to: user.email,
      from: '"Teacher-Assistant" <support@teacherassistant.com>',
      template: join(__dirname, './templates/passwordConfirmation.hbs'),
      context: {
        token: emailToken,
        url: url,
        name: user.name,
        text: 'Link to confirm',
      },
    });
  }

  async sendAppointmentInfo(appointment: IAppointment) {
    const daysOfWeek = {
      0: 'Monday',
      1: 'Tuesday',
      2: 'Wednesday',
      3: 'Thursday',
      4: 'Friday',
      5: 'Saturday',
      6: 'Sunday',
    };
    const lessonsDetail = appointment.lessons
      .map(
        ({ day, startTime, duration }) =>
          `Day: ${daysOfWeek[day]}, at ${startTime} for ${duration} minutes`,
      )
      .join('; ');
    await this.mailerService.sendMail({
      to: appointment.studentEmail,
      from: '"Teacher-Assistant" <support@teacherassistant.com>',
      template: join(__dirname, './templates/lessonAppointment.hbs'),
      context: {
        name: appointment.studentName,
        teacher: appointment.teacherName,
        lesson: lessonsDetail,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import { IUser } from '../user/interfaces/user.interface';
import { IAppointment } from '../appointment/interfaces/appointment.interface';
@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: IUser, emailToken: string) {
    const url = `http://localhost:5000/auth/verifyEmail?token=${user.emailToken}`;

    await this.mailerService.sendMail({
      to: user.email,
      from: '"Project-4-2 Support" <support@project42.com>',
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
    await this.mailerService.sendMail({
      to: appointment.studentEmail,
      from: '"Project-4-2 Support" <support@project42.com>',
      template: join(__dirname, './templates/lessonAppointment.hbs'),
      context: {
        name: appointment.studentName,
        teacher: appointment.teacherId,
        lessonDate: appointment.weekDay,
      },
    });
  }
}

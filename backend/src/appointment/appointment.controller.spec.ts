import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MailService } from '../mail/mail.service';
import { UserService } from '../user/user.service';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { MailModule } from '../mail/mail.module';
import { AuthService } from '../auth/auth.service';

describe('AppointmentController', () => {
  let controller: AppointmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MailModule],
      controllers: [AppointmentController],
      providers: [
        AuthService,
        MailService,
        AppointmentService,
        {
          provide: getModelToken('Appointment'),
          useValue: {},
        },
        UserService,
        {
          provide: getModelToken('User'),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AppointmentController>(AppointmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

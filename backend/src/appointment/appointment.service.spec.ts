import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user/user.service';
import { MailModule } from '../mail/mail.module';
import { AppointmentService } from './appointment.service';

describe('AppointmentService', () => {
  let service: AppointmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MailModule],
      providers: [
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

    service = module.get<AppointmentService>(AppointmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

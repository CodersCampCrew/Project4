import { Module } from '@nestjs/common';
import 'dotenv/config';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MailService } from './mail/mail.service';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}

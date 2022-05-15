import { Module } from '@nestjs/common';
import 'dotenv/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MailService } from './mail/mail.service';
import { UserSchema } from './user/schemas/user.schema';

const { DB_CONNECT } = process.env;

@Module({
  imports: [
    MongooseModule.forRoot(DB_CONNECT),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}

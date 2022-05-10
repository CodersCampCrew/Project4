import { Module } from '@nestjs/common';
import 'dotenv/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

const { DB_CONNECT } = process.env;

@Module({
  imports: [MongooseModule.forRoot(DB_CONNECT), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

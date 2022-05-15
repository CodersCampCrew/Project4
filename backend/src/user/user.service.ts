import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/userDto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  //private users: User[] = [];

  public async createUser(createUserDto: CreateUserDto) {
    console.log(createUserDto);

    const exisitingUser = await this.userModel.findOne({
      $or: [
        { email: createUserDto.email },
        { username: createUserDto.username },
      ],
    });

    if (exisitingUser) {
      throw new ConflictException(`User name or email already taken`);
    }

    const emailToken = randomUUID();

    const newUser = new this.userModel({
      ...createUserDto,
      verifiedByEmail: false,
      emailToken: emailToken,
    });

    this.users.push(user);

    return user;
  }

  public getUsers() {
    return this.users;
  }
}

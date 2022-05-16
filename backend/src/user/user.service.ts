import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/userDto';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

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

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
      verifiedByEmail: false,
      emailToken: emailToken,
    });

    await newUser.save();
    const userObject = newUser.toObject();
    delete userObject.password;
    return userObject;
  }

  public getUsers() {
    return this.userModel.find({});
  }
  public getByUsernameOrEmail(emailOrUsername: string) {
    return this.userModel.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
  }
}

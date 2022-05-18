import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { randomUUID } from 'crypto';
import { CreateUserDto, UpdateUserDto } from './dto/userDto';
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
    console.log(exisitingUser);
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
    console.log(newUser);
    const userObject = newUser.toObject();
    delete userObject.password;
    return userObject;
  }

  public getUsers() {
    return this.userModel.find({});
  }

  public getUser(id: string) {
    return this.userModel.findById(id);
  }

  public getByUsernameOrEmail(emailOrUsername: string) {
    return this.userModel.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
  }
  public deletUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
  public async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
    return this.userModel.findByIdAndUpdate(id, {
      ...updateUserDto,
      password: hashedPassword,
    });
  }
}

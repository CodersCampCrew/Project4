import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { UserRole } from '../interfaces/user.interface';

export class CreateUserDto {
  @IsString()
  @MaxLength(10)
  @MinLength(5)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @MinLength(5)
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly category: UserRole;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

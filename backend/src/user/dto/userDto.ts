import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../interfaces/user.interface';

export class CreateUserDto {
  @IsString()
  @MaxLength(10)
  @MinLength(5)
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'username' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'phone' })
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ type: String, description: 'password' })
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'category' })
  readonly category: UserRole;
}

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'username' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'email' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'password' })
  readonly password: string;

}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class UpdateLoginDto extends PartialType(LoginDto) {}

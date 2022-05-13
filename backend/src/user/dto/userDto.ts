import { UserRole } from '../interfaces/user.interface';

export interface createUserDto {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  category: UserRole;
}

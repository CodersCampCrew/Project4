import { Document } from 'mongoose';

export interface User {
  _id?: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  category: UserRole;
  emailToken: string;
  verifiedByEmail: boolean;
}

export default User;

export type UserRole = 'student' | 'tutor' | 'admin';

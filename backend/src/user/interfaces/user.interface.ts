import { Document } from 'mongoose';
export interface IUser extends Document {
  readonly _id?: string;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
  readonly category: UserRole;
  readonly emailToken: string;
  readonly verifiedByEmail: boolean;
}

export default IUser;

export type UserRole = 'student' | 'tutor' | 'admin';

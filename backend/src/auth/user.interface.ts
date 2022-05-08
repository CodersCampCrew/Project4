interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  role: UserRole;
  areaCode: string;
  emailToken: string;
  verifiedByEmail: boolean;
}

export default User;

type UserRole = 'student' | 'tutor';

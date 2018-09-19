export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  token: string;
  password?: string;
  location?: string;
  birthday?: string;
}

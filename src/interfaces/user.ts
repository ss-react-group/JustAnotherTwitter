import { IAsset } from './asset';
export interface IUser {
  id: number;
  assets: IAsset[];
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  token: string;
  password?: string;
  location?: string;
  birthday?: string;
}

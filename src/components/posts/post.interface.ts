export interface IPost {
  authorId: number;
  content: string;
  id?: number;
  commentsCount?: number;
  likesCount?: number;
  user?: any;
}

export interface IUser {
  id: number;
  email: string;
  birthday: string;
  firstName: string;
  lastName: string;
  location: string;
}

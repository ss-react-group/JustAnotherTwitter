export interface IComment {
  id: number;
  content: string;
  postId: number;
  authorId?: number;
  commentsCount?: number;
  likesCount?: number;
  user?: any;
}
import { IUser } from "./user";

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies?: IComment[];
  replyingTo?: string;
}
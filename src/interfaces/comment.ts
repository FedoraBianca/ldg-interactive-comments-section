import { IUser } from "./user";

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies: string[];
  replyingTo: string | null;
}
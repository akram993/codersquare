import { Comment } from "../types";

export interface CommentDao {
    createComment(comment: Comment): void;
    deleteComment(id: string): void;
    listComment(postId: string): Comment[];
    
}
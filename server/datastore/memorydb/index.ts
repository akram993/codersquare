import { Datastore } from "..";
import { User, Post, Comment, Like } from "../../types";

// creating a class that's implementing the methods from datastore
export class InMemoryDatastore implements Datastore {
    private users: User[] = [];
    private posts: Post[] = [];
    private comments: Comment[] = [];
    private likes: Like[] = [];

// users methods
    createUser(user: User): void {
        this.users.push(user);
    }

    getUserByEmail(email: string): User | undefined {
        return this.users.find(u => u.email === email); 
    }
    
    getUserByUserName(userName: string): User | undefined {
        return this.users.find(u => u.userName === userName);
    }

// posts methods
    listPosts(): Post[] {
        return this.posts;
    }

    createPost(post: Post): void {
        this.posts.push(post);
    }

    getPost(id: string): Post | undefined {
        return this.posts.find(p => p.id === id);
    }

    deletePost(id: string): void {
        const index = this.posts.findIndex(p => p.id === id);
        if(index === -1){
            return;
        }
        this.posts.splice( index, 1);
    }

// comments methods
    createComment(comment: Comment): void {
        this.comments.push(comment);
    }

    deleteComment(id: string): void {
        const index = this.comments.findIndex(c => c.id === id);
        if(index === -1){
            return;
        }
        this.comments.splice( index, 1);
    }

    listComment(postId: string): Comment[] {
        return this.comments.filter(c => c.postId === postId);
    }

// likes methods
    createLike(like: Like): void {
        this.likes.push(like);
    }
    
}
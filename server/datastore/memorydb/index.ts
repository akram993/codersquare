import { Datastore } from "..";
import { User, Post, Comment, Like } from "../../types";

// creating a class that's implementing the methods from datastore
export class InMemoryDatastore implements Datastore {
    private users: User[] = [];
    private posts: Post[] = [];
    private comments: Comment[] = [];
    private likes: Like[] = [];
    
// users methods
    getUserById(id: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    createUser(user: User): Promise<void> {
        this.users.push(user);
        return Promise.resolve();
    }

    getUserByEmail(email: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find(u => u.email === email)); 
    }
    
    getUserByUserName(userName: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find(u => u.userName === userName));
    }

// posts methods
    listPosts(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }

    createPost(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }

    getPost(id: string): Promise<Post | undefined> {
        return Promise.resolve(this.posts.find(p => p.id === id));
    }

    deletePost(id: string): Promise<void> {
        const index = this.posts.findIndex(p => p.id === id);
        if(index === -1){
            return Promise.resolve();
        }
        this.posts.splice( index, 1);
        return Promise.resolve();
    }

// comments methods
    createComment(comment: Comment): Promise<void> {
        this.comments.push(comment);
        return Promise.resolve();
    }

    deleteComment(id: string): Promise<void> {
        const index = this.comments.findIndex(c => c.id === id);
        if(index === -1){
            return Promise.resolve();
        }
        this.comments.splice( index, 1);
        return Promise.resolve();
    }

    listComment(postId: string): Promise<Comment[]> {
        return Promise.resolve(this.comments.filter(c => c.postId === postId));
    }

// likes methods
    createLike(like: Like): Promise<void> {
        this.likes.push(like);
        return Promise.resolve();
    }
    
}
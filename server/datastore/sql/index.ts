import sqlite3 from 'sqlite3'
import { Database, open as sqliteOpen} from 'sqlite'
import path from 'path'
import { Datastore } from "..";
import { User, Post, Comment, Like } from "../../types";

export class SqlDataStore implements Datastore {
    private db!: Database<sqlite3.Database, sqlite3.Statement>;

    public async openDb(){
        // open the database
        this.db = await sqliteOpen({
        filename: path.join(__dirname,"codersquare.sqlite"),
        driver: sqlite3.Database
        });

        await this.db.migrate({
            migrationsPath: path.join(__dirname, 'migrations'),
        });

        this.db.run("PRAGMA foreign_keys=ON;");
        return this;
    }


    async createUser(user: User): Promise<void> {
        await this.db.run(
            'INSERT INTO users (id, email, firstName, lastName, userName, password) VALUES (?,?,?,?,?,?)', 
            user.id, 
            user.email, 
            user.firstName, 
            user.lastName, 
            user.userName,
            user.password
        )
    }

    getUserByEmail(email: string): Promise<User | undefined> {
        return this.db.get<User>(`SELECT * FROM users WHERE email = ?`, email);
    }

    getUserByUserName(userName: string): Promise<User | undefined> {
        return this.db.get<User>(`SELECT * FROM users WHERE userName = ?`, userName);
    }

    listPosts(): Promise<Post[]> {
        return this.db.all<Post[]>('SELECT * FROM posts');
    }

    async createPost(post: Post): Promise<void> {
        await this.db.run(
            'INSERT INTO posts (id, title, url, userId, postedAt) VALUES (?,?,?,?,?)', 
            post.id, 
            post.title, 
            post.url, 
            post.userId, 
            post.postedAt
        )
    }

    getPost(id: string): Promise<Post | undefined> {
        throw new Error("Method not implemented.");
    }
    deletePost(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createComment(comment: Comment): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteComment(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listComment(postId: string): Promise<Comment[]> {
        throw new Error("Method not implemented.");
    }
    createLike(like: Like): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}
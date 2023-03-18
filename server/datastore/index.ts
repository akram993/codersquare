import { CommentDao } from "./DAO/CommentDao";
import { LikeDao } from "./DAO/LikeDao";
import { InMemoryDatastore } from "./memorydb";
import { PostDao } from "./DAO/PostDao";
import { UserDao } from "./DAO/UserDao";
import { SqlDataStore } from "./sql";

export interface Datastore extends UserDao, PostDao, CommentDao, LikeDao {}

export let db: Datastore;

export async function initDb(){
    // db = new InMemoryDatastore();
    db = await new SqlDataStore().openDb();
} 

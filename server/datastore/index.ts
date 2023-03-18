import { CommentDao } from "./DAO/CommentDao";
import { LikeDao } from "./DAO/LikeDao";
import { InMemoryDatastore } from "./memorydb";
import { PostDao } from "./DAO/PostDao";
import { UserDao } from "./DAO/UserDao";

export interface Datastore extends UserDao, PostDao, CommentDao, LikeDao {}

export const db = new InMemoryDatastore();

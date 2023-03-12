import { CommentDao } from "./CommentDao";
import { LikeDao } from "./LikeDao";
import { InMemoryDatastore } from "./memorydb";
import { PostDao } from "./PostDao";
import { UserDao } from "./UserDao";

export interface Datastore extends UserDao, PostDao, CommentDao, LikeDao {}

export const db = new InMemoryDatastore();

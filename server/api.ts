import { Post } from "./types";

//post APIs

// List the posts APIs
export interface ListPostRequest {}
export interface ListPostResponse {
    posts: Post[];
}

// Create the post APIs
export type CreatePostRequest = Pick<Post, 'title'|'userId'|'url'>;
export interface CreatePostResponse{};

// Get the post by ID APIs
export interface GetPostRequest {};
export interface GetPostResponse {
    post: Post;
}

// Delete the post APIs
export interface DeletePostRequest {};
export interface DeletePostResponse {};


// Comment APIs

// Likes APIs

// User APIs

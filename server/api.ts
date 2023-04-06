import { Post, User } from "./types";

/****************** post APIs ***********************/

// List the posts APIs
export interface ListPostRequest {}
export interface ListPostResponse {
    posts: Post[];
}

// Create the post APIs
export type CreatePostRequest = Pick<Post, 'title'|'url'>;
export interface CreatePostResponse{};

// Get the post by ID APIs
export interface GetPostRequest {};
export interface GetPostResponse {
    post: Post;
}

// Delete the post APIs
export interface DeletePostRequest {};
export interface DeletePostResponse {};


/****************** user APIs ***********************/
//Sign Up
export type SignUpRequest = Pick<User, 'email'|'firstName'|'lastName'|'userName'|'password'>;
export interface SignUpResponse {
    jwt: string
};

//Sign In
export interface SingInRequest {
    login: string; //email or username
    password: string
}
export type SignInResponse = {
    user:Pick<User, 'email'|'firstName'|'lastName'|'userName'|'id'>;
    jwt:string
}

/****************** comments APIs ***********************/

/****************** likes APIs ***********************/

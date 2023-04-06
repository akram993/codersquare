import { db } from "../datastore";
import { ExpressHandler, Post } from "../types";
import crypto from 'crypto';
import { CreatePostRequest, CreatePostResponse, ListPostRequest, ListPostResponse } from "../api";



// list all the posts handler
export const listPostHandler: ExpressHandler<ListPostRequest, ListPostResponse> = async (req, res) => {
    res.send({ posts: await db.listPosts() });
}

// create post handler
export const createPostHandler: ExpressHandler<CreatePostRequest, CreatePostResponse> = async (req, res)=>{
    // TODO: validate user exists
    // TODO: validate title and url are non-empty
    // TODO: get user ID from session
    // TODO: validate url in new otherwise add +1 to existing post 
    if(!req.body.title || !req.body.url){ // check if the attributes we need exist
        return res.sendStatus(400);
    }
    const post:Post = {
        id: crypto.randomUUID(),
        postedAt: Date.now(),
        title: req.body.title,
        url: req.body.url,
        userId : res.locals.userId
    }
    await db.createPost(post);
    res.sendStatus(200);
}


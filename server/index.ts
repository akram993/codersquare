import express, { RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/PostHandlers';

const app = express();

app.use(express.json());


const requestLoggerMiddleware: RequestHandler = (req, res, next) =>{
    console.log(req.method, req.path, "- body", req.body);
    next();
}

app.use(requestLoggerMiddleware);

app.get('/posts', listPostHandler)

app.post('/posts', createPostHandler)

app.listen(3000);

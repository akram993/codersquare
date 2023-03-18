import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/PostHandlers';
import asyncHandler from "express-async-handler";

const app = express();

app.use(express.json());


const requestLoggerMiddleware: RequestHandler = (req, res, next) =>{
    console.log(req.method, req.path, "- body", req.body);
    next();
}

app.use(requestLoggerMiddleware);

const errHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error("uncaught exception:", err);
    return res.sendStatus(500).send("Ooops! an error happend please try again");
};

app.use(errHandler);

app.get('/posts', asyncHandler(listPostHandler))

app.post('/posts', asyncHandler(createPostHandler))

app.listen(3000);

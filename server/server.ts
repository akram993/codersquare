import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/PostHandlers';
import asyncHandler from "express-async-handler";
import { initDb } from './datastore';
import { signInHandler, signUpHandler } from './handlers/AuthHandler';
import { requestLoggerMiddleware } from './middleware/LoggerMiddleware';
import { errHandler } from './middleware/ErrorMiddleware';
import dotenv from 'dotenv';

(async () => {

await initDb();
dotenv.config();

const app = express();

app.use(express.json());
app.use(requestLoggerMiddleware);


app.get('/posts', asyncHandler(listPostHandler));
app.post('/posts', asyncHandler(createPostHandler));

app.post('/signup', asyncHandler(signUpHandler));
app.post('/signin', asyncHandler(signInHandler));

app.use(errHandler);

app.listen(3000);

})();
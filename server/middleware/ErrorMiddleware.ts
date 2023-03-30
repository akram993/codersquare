import { ErrorRequestHandler } from "express";

export const errHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error("uncaught exception:", err);
    return res.status(500).send("Ooops! an error happend please try again");
};

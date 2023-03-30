import { SignInResponse, SignUpRequest, SignUpResponse, SingInRequest } from "../api";
import { db } from "../datastore";
import { ExpressHandler, User } from "../types";
import crypto from 'crypto';
import expressAsyncHandler from "express-async-handler";
import { signJwt } from "../auth";

export const signUpHandler: ExpressHandler<SignUpRequest, SignUpResponse>  =async (req, res) =>{
    const {email, firstName, lastName, userName, password} = req.body;
    if(!email || !firstName || !lastName || !userName || !password){
        return res.status(400).send({error: "all fields are required"});
    }

    const existing = await db.getUserByEmail(email) || await db.getUserByUserName(userName);
    if(existing){
        return res.status(403).send({error: "user already exist!"});
    }
        
    const user: User ={
        id: crypto.randomUUID(),
        email,
        firstName,
        lastName,
        userName,
        password: hashPassword(password)
    }
    await db.createUser(user);
    const jwt = signJwt({userId: user.id});
    return res.status(200).send({
        jwt,
    });
}

export const signInHandler: ExpressHandler<SingInRequest, SignInResponse> = async (req, res) =>{
    const {login, password} = req.body;
    if(!login || !password){
        return res.status(400);
    }

    const existing = await db.getUserByEmail(login) || await db.getUserByUserName(login);
    if(!existing || existing.password !== hashPassword(password) ){
        return res.status(403);
    }
    const jwt = signJwt({userId: existing.id})

    return res.status(200).send({
    user:{
        id: existing.id,
        email: existing.email,
        firstName: existing.firstName,
        lastName: existing.lastName,
        userName: existing.userName
        }, 
    jwt,
    })
}

function hashPassword(password: string): string{
    return crypto
    .pbkdf2Sync(password, process.env.PASSWORD_SALT!, 42, 64, "sha512")
    .toString("hex");
}
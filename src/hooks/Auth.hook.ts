import { Request, Response, NextFunction } from 'express';
import Jwt from "jsonwebtoken";
import { configApp } from "../config/app.config";

const secret = configApp.jwt.secret;

function sign(data: any) {
  return Jwt.sign(data, secret);
}

function getToken(auth?: string) {
  if (!auth) throw new Error("token not found");

  if (auth.indexOf("Bearer ") === -1) throw new Error("invalid format");

  let token = auth.replace("Bearer ", "");
  return token;
}

function verifyToken(token: string): any {
  return Jwt.verify(token, secret);
}

function decodeHeader(req: Request) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  return verifyToken(token);
}

function check(req: Request, owner: any) {
  const decoder = decodeHeader(req);
  console.log(decoder);

  if (decoder.id !== owner) throw new Error("Invalid Token");
}

async function middleware (req : Request , res : Response, next : NextFunction) {
try {
    const owner = req.body.id || req.params.id
    check(req,owner)
    next()
} catch (error : any) {
    res.status(403).json({message : error.message})
}
}

export default {
  sign,
  middleware,
};

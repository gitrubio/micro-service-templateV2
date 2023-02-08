import { Request, Response } from "express";
import auth from "../services/auth.service";


async function singin(req: Request, res: Response) {
  try {
    const {identificacion , password }  = req.body;
    const token = await auth.authorization(identificacion,password)
    if(!token) return res.status(403).json({ message : 'not authorized'})
    res.status(200).json({token : token })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}


export default {
    singin
};

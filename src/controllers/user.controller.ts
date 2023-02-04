import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interfaces";
import userServices from "../services/user.services";
import { v4 as uuid} from 'uuid'

async function get(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const { data, error, message } = await userServices.getOne<IUser>(id);

    if (error) return res.status(500).json({ mensaje: message });

    res.status(200).json({ data: data || {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}

async function create(req: Request, res: Response) {
  try {
    const user : IUser = req.body;
    if( !user.id ) user.id = uuid()
    const { data, error, message } = await userServices.create<IUser>(user);

    if (error) return res.status(500).json({ mensaje: message });
    
    res.status(200).json({ data: data});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}

export default {
  get,
  create
};

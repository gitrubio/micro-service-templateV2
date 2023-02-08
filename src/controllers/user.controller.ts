import { Request, Response } from "express";
import { IUser } from "../interfaces/user.interfaces";
import userServices from "../services/user.service";
import { v4 as uuid } from "uuid";

async function get(req: Request, res: Response) {
  try {
    const id = req.params.id;
    
    const { data, error, message } = await (id
      ? userServices.getOne<IUser>(id)
      : userServices.getAll<IUser[]>());

    if (error) return res.status(500).json({ message: message });

    res.status(200).json({ data: data || {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}

async function create(req: Request, res: Response) {
  try {
    const user: IUser = req.body;

    if (!user.id) user.id = uuid();
    const { data, error, message } = await userServices.create<IUser>(user);

    if (error) return res.status(500).json({ message: message });

    res.status(201).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}

async function uptade(req: Request, res: Response) {
  try {
    const user: IUser = req.body;

    if (!user.id) return res.status(400).json({ message: 'not found id'  });
    const { data, error, message } = await userServices.uptade<IUser[]>(user);

    if (error) return res.status(400).json({ message: message });

    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}

async function deleteUser(req: Request, res: Response) {
  try {
    const id: string = req.params.id;

    const { data, error, message } = await userServices.userDelete<number>(id);

    if (error) return res.status(500).json({ message: message });

    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
}

export default {
  get,
  create,
  uptade,
  deleteUser,
};

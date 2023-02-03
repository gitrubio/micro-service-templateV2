import { Request, Response } from "express";

export default class UserController {

  static async getAll(req: Request, res: Response) {
    const data  = req.body
    console.log(data)
    res.status(200).json(data)
  }

}

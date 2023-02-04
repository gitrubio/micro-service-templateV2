import { Request, Response } from "express";
import { IService } from "../interfaces/app.interface";
import { IUser } from "../interfaces/user.interfaces";

export default class UserController {

  constructor(
    private readonly userService: IService
    ) {}

  async get(req: Request, res: Response) {
      const id = req.body.id
      const {data , error , message } = await this.userService.getOne<IUser>('')
      if(error) res.status(500).json({mensaje : message})
      
      res.status(200).json({data : data || {}})
  }
}

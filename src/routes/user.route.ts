import { Router } from "express";
import UserController from "../controllers/user.controller";
import UserServices from '../services/user.services';


const userRouter = Router()
const userServices = new UserServices()
const userController = new UserController(userServices)

userRouter.get('/',userController.get)
userRouter.get('/:id',userController.get)
userRouter.post('/')
userRouter.put('/:id')
userRouter.delete('/:id')


export default userRouter;
import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRouter = Router()

userRouter.get('/',UserController.getAll)
userRouter.get('/:id')
userRouter.post('/')
userRouter.put('/:id')
userRouter.delete('/:id')


export default userRouter;
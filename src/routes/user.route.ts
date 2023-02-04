import { Router } from "express";
import userController from '../controllers/user.controller'
import { userScheme, validateSchema } from "../hooks/validator.hook";



const userRouter = Router()

userRouter.get('/')
userRouter.get('/:id',userController.get)
userRouter.post('/',validateSchema(userScheme),userController.create)
userRouter.put('/:id')
userRouter.delete('/:id')


export default userRouter;
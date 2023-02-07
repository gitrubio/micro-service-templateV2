import { Router } from "express";
import userController from '../controllers/user.controller'
import { userScheme, validateSchema } from "../hooks/validator.hook";



const userRouter = Router()

userRouter.get('/',userController.get)
userRouter.get('/:id',userController.get)
userRouter.post('/',validateSchema(userScheme),userController.create)
userRouter.put('/',validateSchema(userScheme),userController.uptade)
userRouter.delete('/:id',userController.deleteUser)


export default userRouter;
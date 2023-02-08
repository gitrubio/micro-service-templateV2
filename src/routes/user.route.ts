import { Router } from "express";
import userController from '../controllers/user.controller'
import { userScheme, validateSchema } from "../hooks/validator.hook";
import auth from '../hooks/Auth.hook'


const userRouter = Router()

userRouter.get('/',userController.get)
userRouter.get('/:id', auth.middleware, userController.get)
userRouter.post('/', validateSchema(userScheme), userController.create)
userRouter.put('/', auth.middleware, validateSchema(userScheme), userController.uptade)
userRouter.delete('/:id', auth.middleware, userController.deleteUser)


export default userRouter;
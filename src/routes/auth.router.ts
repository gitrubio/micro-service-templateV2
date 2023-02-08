import { Router } from "express";
import authController from '../controllers/auth.controller'
import { SingScheme, validateSchema } from "../hooks/validator.hook";



const authRouter = Router()

authRouter.post('/',validateSchema(SingScheme),authController.singin)



export default authRouter;
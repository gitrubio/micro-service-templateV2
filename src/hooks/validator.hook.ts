import { NextFunction, Response, Request } from "express";
import * as joi from "joi";

export const userScheme = joi.object({
  id: joi.string().uuid().optional(),
  name: joi.string().required(),
  lastName: joi.string().optional(),
  identificacion: joi.number().required().allow(""),
  password: joi
    .alternatives()
    .conditional("identificacion", [
      {
        is: joi.any().valid(""),
        then: joi.string().optional().allow(""),
        otherwise: joi.string().required(),
      },
    ]),
});

export const validateSchema = (schema: joi.ObjectSchema) => {
  return (req: Request, res: Response, Next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    } else {
      Next();
    }
  };
};

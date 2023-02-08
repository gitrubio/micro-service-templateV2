import Auth from "../hooks/Auth.hook";
import { IUser } from "../interfaces/user.interfaces";
import UserInstance from "../models/user.model";
import bycryp from "bcrypt";

async function authorization(identificacion : string, password : string) : Promise<null | string> {
  try {
    const data = await UserInstance.findOne({
      where: { identificacion: identificacion },
    });

    if (!data) return null;

    const user = data.toJSON();
    const crypt = await bycryp.compare(password, user.password);

    return crypt ? Auth.sign(user) : null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export default {
    authorization
};

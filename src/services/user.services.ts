import { IData } from "../interfaces/app.interface";
import UserInstance from "../models/user.model";
import { IUser } from "../interfaces/user.interfaces";

async function getAll<T>(): Promise<IData<T>> {
  try {
    const user = await UserInstance.findAll();
    return { data: user as T, error: false };
  } catch (error: any) {
    return { error: true, message: error.message };
  }
}

async function getOne<T>(id: string): Promise<IData<T>> {
  try {
    const user = await UserInstance.findByPk(id);
    return { data: user?.toJSON() as T, error: false };
  } catch (error: any) {
    return { error: true, message: error.message };
  }
}

async function create<T>(params: IUser): Promise<IData<T>> {
  try {
    const userCreate = await UserInstance.create(params);
    return { data: userCreate as T, error: false };
  } catch (error: any) {
    return { error: true, message: error.message };
  }
}

async function uptade<T>(params: IUser): Promise<IData<T>> {
  try {
    const userUpdate = await UserInstance.update(params, {
      where: { id: params.id },
      returning: true,
    });
    return { data: userUpdate[1] as T, error: false };
  } catch (error: any) {
    return { error: true, message: error.message };
  }
}

async function userDelete<T>(id: string): Promise<IData<T>> {
  try {
    const deletes = await UserInstance.destroy({where : { id : id}})
    return { data: deletes as T, error: false };
  } catch (error: any) {
    return { error: true, message: error.message };
  }
}

export default {
  getOne,
  create,
  getAll,
  uptade,
  userDelete
};

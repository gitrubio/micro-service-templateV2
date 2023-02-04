
import { IData } from '../interfaces/app.interface';
import UserInstance from '../models/user.model';
import { IUser } from '../interfaces/user.interfaces';



async function getOne<T>(id : string): Promise<IData<T>> {
   try {
      const user =  await UserInstance.findByPk(id)
      return {data : user?.toJSON() as T, error : false }
   } catch (error : any) {
       return {error : true , message : error.message}
   }   
}

async function create<T>(params: IUser) : Promise<IData<T>> {
   try {
      const userCreate = await UserInstance.create(params)
      return {data : userCreate as T, error : false}
   } catch (error : any) {
      return {error : true , message : error.message}
   }
}
export default {
   getOne,
   create
}

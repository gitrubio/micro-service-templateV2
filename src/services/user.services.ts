import db from '../database/connection';
import { IService, IData } from '../interfaces/app.interface';
import UserInstance from '../models/user.model';

export default class UserServices implements IService{

  async getOne <T>( id : string) : Promise<IData<T>> {
    try {
       const user =  await UserInstance.findByPk(id)
       return {data : user?.toJSON() as T, error : false }
    } catch (error : any) {
        return {error : true , message : error.message}
    }
   }


}
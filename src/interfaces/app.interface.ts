export interface IData<T> {
  error: boolean;
  data ?: any 
  message?: string;
}

export interface IService {
   getOne : <T> (params : any) => Promise<IData<T>>
/*    find   : <T> (params?: any) => Promise<IData<T>>
   update : <T> (params?: any) => Promise<IData<T>>
   delete : <T> (params?: any) => Promise<IData<T>> */
}
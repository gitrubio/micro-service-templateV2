import { Model , DataTypes } from 'sequelize'
import { IUser } from '../interfaces/user.interfaces';
import db from '../database/connection';

export default class UserInstance extends Model<IUser> {}

UserInstance.init(
    {
        id : {
            type :  DataTypes.BIGINT,
            primaryKey : true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        lastName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        identificacion : {
            type : DataTypes.UUIDV4,
            allowNull : true
        },
        password : {
            type : DataTypes.STRING,
            allowNull : true
        }
    },
    {
        updatedAt : false,
        createdAt : false,
        sequelize : db,
        tableName : 'personas'
        
    }
)
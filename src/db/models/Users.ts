import {DataType, DataTypes, Model, Optional} from "sequelize";
import db from "../../config/db";

interface UserAttributes {
    id?:number,
    email?:string|null,
    createdAt?:Date,
    updatedAt?:Date
}

export interface UsersInput extends Optional<UserAttributes,'id'>{}
export interface UsersOutput extends Required<UserAttributes>{}

class Users extends Model<UserAttributes, UsersInput> implements UserAttributes{
    public id!:number
    public email!:string
    public readonly createdAt!: Date;
    public readonly updatedAt!:Date;
}

Users.init({
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.BIGINT
    },
    email:{
        allowNull:true,
        type:DataTypes.STRING
    },
},{
    timestamps:true,
    sequelize:db,
    underscored:false
})

export default Users
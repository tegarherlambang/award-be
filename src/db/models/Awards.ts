import {DataType, DataTypes, Model, Optional} from "sequelize";
import db from "../../config/db";

interface AwardAttributes {
    id?:number,
    type?:string|null,
    point?:number|null,
    name?:string|null,
    image?:string|null,
    createdAt?:Date,
    updatedAt?:Date
}

export interface AwardsInput extends Optional<AwardAttributes,'id'>{}
export interface AwardsOutput extends Required<AwardAttributes>{}

class Awards extends Model<AwardAttributes, AwardsInput> implements AwardAttributes{
    public id!:number
    type!:string
    point!:number
    name!:string
    image!:string
    public readonly createdAt!: Date;
    public readonly updatedAt!:Date;
}

Awards.init({
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.BIGINT
    },
    type:{
        allowNull:true,
        type:DataTypes.STRING
    },
    point:{
        allowNull:true,
        type:DataTypes.INTEGER
    },
    name:{
        allowNull:true,
        type:DataTypes.STRING
    },
    image:{
        allowNull:true,
        type:DataTypes.STRING
    },
},{
    timestamps:true,
    sequelize:db,
    underscored:false
})

export default Awards
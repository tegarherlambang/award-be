import { Request, Response } from "express";
import Awards from "../db/models/Awards";
import Helper from "../helpers/responseHandler";
import { Op } from "sequelize";
  
const ListAward = async (req:Request, res:Response):Promise<Response>=>{
    try {
        const {limit,offset, type, pointMin, pointMax} = req.query
        let whereClause = {}
        if (type) {
            let arr = Array(type).map(v=>{
                return {"type":v}
            })
            
            whereClause= {
                ...whereClause,
                [Op.or]:arr
            }
        }
        if (pointMin && pointMax) {
            whereClause= {
                ...whereClause,
                point:{[Op.between]:[pointMin,pointMax]}
            }
        }
        const award = await Awards.findAndCountAll({
            where:whereClause,
            limit: Number(limit),
            offset:Number(limit)* Number(offset) - Number(limit)
        })
        return res.status(200).json(Helper.responseData(true,"List Of award",null,award))
    } catch (error:any) {
        return res.status(500).json(Helper.responseData(false,"",error,null))
    }
}

export default {ListAward}
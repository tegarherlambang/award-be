import { Request, Response } from "express";
import Users from "../db/models/Users";
import Helper from "../helpers/responseHandler";

const Login = async (req:Request, res:Response):Promise<Response>=>{
    try {
        const {email} = req.body

        const user = await Users.findOne({
            where:{
                email
            }
        })
        if (!user) {
            return res.status(200).json(Helper.responseData(false,"User Not Found",null,null))
        }

        return res.status(200).json(Helper.responseData(true,"Successfully Login",null,req.body))
    } catch (error:any) {
        return res.status(500).json(Helper.responseData(false,"",error,null))
    }
}

export default {Login}
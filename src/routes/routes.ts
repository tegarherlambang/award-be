import express from "express"
const router = express.Router()

import UserController from "../controllers/UserController";
import AwardController from "../controllers/AwardController";

router.post('/user/login', UserController.Login)

router.get('/award/list', AwardController.ListAward)

export default router
import express from "express";

import {
    getUser,
    getUserFriends,
    addRemoveFriend,

} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
import { get } from "mongoose";

const router = express.Router();

//OPERACIONES CRUD

//READ (lectura del id)
router.get("/:id",verifyToken,getUser);
router.get("/:id/friends",verifyToken,getUserFriends);

//UPDATE (actualizacion)
router.patch("/:id/friendId",verifyToken,addRemoveFriend);

export default router;
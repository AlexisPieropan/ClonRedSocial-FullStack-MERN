import express from "express";
import {getFeedPosts, getUserPosts,likePost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router=express.Router();

//READ
router.get("/",verifyToken,getFeedPosts); //obtiene todos los posts del feed 
router.get("/:userId/posts",verifyToken,getUserPosts); // obtiene los usuarios vinculados a los posts especificos por el ID


//UPDATE (ATUALIZACION)
router.patch("/:id/like",verifyToken,likePost);

export default router;

import { Router } from "express";
import { createPost, getAllPost } from "../controllers/posteo.controler.js";
const router = Router();
router.post('/posts',createPost);
router.get('/posts',getAllPost)



export default router
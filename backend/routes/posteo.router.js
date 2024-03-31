import { Router } from "express";
import { createPost, getAllPost,putPost,deletedPost } from "../controllers/posteo.controler.js";
const router = Router();
router.post('/posts',createPost);
router.get('/posts',getAllPost)
router.put('/posts/:id',putPost)
router.delete('/posts/:id',deletedPost)



export default router
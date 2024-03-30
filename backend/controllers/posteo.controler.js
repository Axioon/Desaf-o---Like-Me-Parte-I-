import { createPostModel,getAllPostModel } from "../models/like.model.js";

// post
export const createPost = async (req,res)=>{
    try {
        const {post}= req.body
        console.log(post);
        const newPost= await createPostModel (post)
        res.status(201).json({post:newPost})


    } catch (error) {
        res.status(500).json({error:error.message})
        console.log('error al procesar solicitud',error)
    }
}

export const getAllPost = async (req,res)=>{
try {
    const posts= await getAllPostModel()
    res.status(200).json({posts:posts})

} catch (error) {
    res.status(500).json({error:error.message})
}

}
import { createPostModel,getAllPostModel,putPostModel,deletePostModel } from "../models/like.model.js";

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
export const putPost = async (req, res) => {
    try {
      const { id } = req.params;  // Obtener el ID del post a actualizar
      const post = req.body;  // Obtener el objeto post directamente del body
  
      // Verificar si el objeto post está vacío o no es un objeto
      if (!post || typeof post !== 'object') {
        return res.status(400).json({ error: 'Invalid post data' });
      }
  
      // Actualizar el post con los datos proporcionados
      const updatedPost = await putPostModel(id, post);
  
      // Verificar si el post se actualizó correctamente
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // Devolver el post actualizado como respuesta
      res.status(200).json({ post: updatedPost });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const deletedPost = async (req, res) => {
    try {
      const { id } = req.params;  // Obtener el ID del post a eliminar
  
      // Eliminar el post con el ID proporcionado
      const deletedPost = await deletePostModel(id);
  
      // Verificar si el post se elimino correctamente
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      // Devolver el post eliminado como respuesta
      res.status(200).json({ post: deletedPost });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
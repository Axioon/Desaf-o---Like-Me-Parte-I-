import pool from "../db/config.js"


//post
export const createPostModel= async ({titulo,img,descripcion,likes} )=>{
    try {
        const result =await pool.query(
            'INSERT INTO post (titulo,img,descripcion,likes) VALUES ($1,$2,$3,$4) RETURNING *',
           [titulo,img,descripcion,likes] )
           console.log(result.rows)
           return result.rows[0]
        }
    
        
        catch (error){
            throw new Error(`Error creating newpost: ${error.message}`);
        }
}

//get
export const getAllPostModel = async (req,res) => {
    try {
      const allPost = await pool.query('SELECT * FROM post');
      return allPost.rows
      console.log(allPost);
    
    } catch (error) {
      res.status(500).json({ error: 'Error getting all posts: ' + error.message }); // Enviar el error al cliente
    }
  };
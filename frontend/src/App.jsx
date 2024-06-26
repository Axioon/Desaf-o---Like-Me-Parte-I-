import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:5000/api/v1";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data: { posts: posts2 } } = await axios.get(urlBaseServer + "/posts");
      setPosts(posts2); // Ahora posts2 es un array iterable
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const agregarPost = async () => {
    const post = {
      post: {
        titulo,
        img: imgSrc,
        descripcion,
      },
    };
    console.log(post)
    await axios.post(urlBaseServer + "/posts", post);
    getPosts();
  };



  // este método se utilizará en el siguiente desafío
  const like = async (id, likes) => {
    console.log("ID del post:", id);
    // Actualiza el número de likes en el estado antes de enviar la solicitud PUT
    const updatedPosts = posts.map((p) =>
      p.id === id ? { ...p, likes: likes } : p
    );
    setPosts(updatedPosts);
  
    // Envia la solicitud PUT para actualizar los likes en el servidor
    await axios.put(`${urlBaseServer}/posts/${id}`, { id, likes });
    getPosts();
  };

  // este método se utilizará en el siguiente desafío
  const eliminarPost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post
              key={i}
              post={post}
              like={like}
              eliminarPost={eliminarPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

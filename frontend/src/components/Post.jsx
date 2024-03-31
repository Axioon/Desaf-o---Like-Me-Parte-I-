function Post({ post: { id, titulo, img, descripcion, likes }, like, eliminarPost }) {
  return (
    <div className="card col-12 col-sm-4 d-inline mx-0 px-3">
      <div className="card-body p-0">
        <img className="card-img-top" src={img} alt={titulo} />
        <div className="p-3">
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">{descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <i
                onClick={() => like(id, likes + 1)} // Incrementa los likes al hacer clic
                className={`fas fa-heart fa-lg ${likes ? "text-danger" : "text-muted"}`} // Utiliza las clases correctas de Font Awesome 5 y ajusta el tamaño según sea necesario
              ></i>
              <span className="ms-1">{likes}</span>
            </div>
            <i onClick={() => eliminarPost(id)} className="fas fa-trash-alt fa-lg"></i> {/* También asegúrate de usar las clases correctas para el icono de eliminar */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

CREATE DATABASE likeme;


CREATE TABLE post(
    id SERIAL, titulo VARCHAR(25) NOT NULL,
    img VARCHAR(1000) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    likes INT );
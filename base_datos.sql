-- Creación de la Base de Datos
Create DataBase credenciales;

\c credenciales;

-- creación de la tablas

create table roles(
rol_id serial PRIMARY KEY,
Rol_usuario varchar(50) NOT NULL
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol_id INT,
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
);


--insertar roles

INSERT INTO roles (Rol_usuario) VALUES ('Administrador');
INSERT INTO roles (Rol_usuario) VALUES ('Usuarios');


--insertar usuarios de prueba

Insert INTO usuarios (username,password,rol_id) VALUES ('lopez','ab12cd',1);
Insert INTO usuarios (username,password,rol_id) VALUES ('maidana','ma123s',1);


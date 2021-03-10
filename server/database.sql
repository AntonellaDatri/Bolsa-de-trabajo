CREATE DATABASE bolsadetrabajo;

CREATE Table alumnos(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR NOT NULL,
    apellido VARCHAR NOT NULL,
    idDNI INT NOT NULL,
    tipoDNI VARCHAR NOT NULL,
    fechaNacimiento DATE NOT NULL,
    mail VARCHAR NOT NULL,
    carrera VARCHAR NOT NULL,
    anioinicio INT NOT NULL,
    experiencia VARCHAR,
    aprobado Boolean NOT NULL
);

CREATE Table empresas(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR NOT NULL,
    cuit INT NOT NULL,
    provincia VARCHAR NOT NULL,
    localidad VARCHAR NOT NULL,
    direccion VARCHAR NOT NULL,
    telefono INT NOT NULL,
    mail VARCHAR,
    inicioDeLaConv DATE NOT NULL,
    finDeLAConv DATE NOT NULL,
    descpPuesto VARCHAR NOT NULL,
    aprobado Boolean NOT NULL

);

CREATE Table users(
    userid VARCHAR,
    password VARCHAR NOT NULL,

    PRIMARY KEY(userid)
);


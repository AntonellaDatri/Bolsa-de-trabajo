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

------


---usuarios de prueba
INSERT INTO alumnos (userid, password) 
VALUES
('admin','admin')
('admin2','admin2'),
('admin3','admin3');

---Alumnos Aprobados
INSERT INTO alumnos (nombre, apellido, idDNI, tipoDNI, fechaNacimiento, mail, carrera, anioinicio, experiencia, aprobado)
VALUES('Juan','Perez',123546789,'DNI','1989-10-10','juanperez@mail.com','marketing',2014,'Trabaje en una empresa de...',true),
VALUES('Maria','Gomez',123546789,'DNI','2001-10-10','mariagomez@mail.com','ingenieria en alimentos',2018,'Trabaje en una empresa de...',true),
VALUES('Jose','Garcia',123546789,'DNI','1990-10-10','juanperez@mail.com','marketing',2010,'Trabaje en una empresa de...',true),
VALUES('Sofia','Gonzales',123546789,'DNI','1993-10-10','sofiagonzales@mail.com','Licenciatura en Informatica',2020,'Trabaje en una empresa de...',true),
VALUES('Carola','Almeida',123546789,'DNI','2000-10-10','carolaalmeida@mail.com','abogacia',2018,'Trabaje en un estudio de...',true),
VALUES('Leo','Delgado',123546789,'DNI','1985-10-10','leodelgado@mail.com','fotografia',2004,'Trabaje en una empresa de...',true),
VALUES('Analia','Rojas',123546789,'DNI','1995-10-10','analiarojas@mail.com','arquitectura',2016,'Trabaje en una empresa de...',true);


---Alumnos en estado borrador
INSERT INTO alumnos (nombre, apellido, idDNI, tipoDNI, fechaNacimiento, mail, carrera, anioinicio, experiencia, aprobado)
VALUES('Esteban','Perez',123546789,'DNI','1989-10-10','estebanperez@mail.com','enfermeria',2014,'Trabaje en una empresa de...',false),
VALUES('Juan','Diaz',123546789,'DNI','2001-10-10','juandiaz@mail.com','ingenieria quimica',2018,'Trabaje en una empresa de...',false),
VALUES('Ana','Bustamante',123546789,'DNI','1990-10-10','anabustamante@mail.com','marketing',2010,'Trabaje en una empresa de...',false),
VALUES('Hernan','Biondi',123546789,'DNI','1993-10-10','hernanbiondi@mail.com','Tecnicatura en Informatica',2020,'Trabaje en una empresa de...',false),
VALUES('Carolina','Heredia',123546789,'DNI','2000-10-10','carolinaheredia@mail.com','abogacia',2018,'Trabaje en un estudio de...',false),
VALUES('Pablo','Delgado',123546789,'DNI','1985-10-10','pablodelgado@mail.com','fotografia',2004,'Trabaje en una empresa de...',false),
VALUES('Gonzalo','Camarota',123546789,'DNI','1995-10-10','gonzalocamarota@mail.com','arquitectura',2016,'Trabaje en una empresa de...',false);


---Empresas Aprobadas
INSERT INTO empresas (nombre,cuit,provincia,localidad,direccion,telefono,mail,inicioDeLaConv,finDeLAConv,descpPuesto,aprobado)
VALUES("Sancor",12345678912,"Buenos Aires","Tigre","calle falsa 123",1123456789,"sancor@mail.com",'2021-3-10','2021-5-16',"Abrimos la convocatoria de ...",true),
VALUES("Estudio Juridico A&M",12345678912,"Buenos Aires","C.A.B.A","calle falsa 123",1123456789,"estudiojuridicoA&M@mail.com",'2021-3-2','2021-5-24',"Abrimos la convocatoria de ...",true),
VALUES("Arcor",12345678912,"Entre Rios","La Paz","calle falsa 123",1123456789,"arcor@mail.com",'2023-12-16','2021-3-16',"Abrimos la convocatoria de ...",true),
VALUES("Inmobiliaria Hernan Gomez",12345678912,"Tucuman","Yerba Buena","calle falsa 123",1123456789,"inmmobiliariagomez@mail.com",'2020-11-3','2021-6-3',"Abrimos la convocatoria de ...",true),
VALUES("Easy",12345678912,"Buenos Aires","Quilmes","calle falsa 123",1123456789,"easy@mail.com",'2020-9-10','2021-3-22',"Abrimos la convocatoria de ...",true),
VALUES("Estudio Fotografico Amalia",12345678912,"Cordoba","Cordoba Capital","calle falsa 123",1123456789,"fotografiaAmalia@mail.com",'2020-3-24','2021-6-24',"Abrimos la convocatoria de ...",true);

---Empresas en estado borrador
INSERT INTO empresas (nombre,cuit,provincia,localidad,direccion,telefono,mail,inicioDeLaConv,finDeLAConv,descpPuesto,aprobado)
VALUES("CBSé",12345678912,"Buenos Aires","C.A.B.A.","calle falsa 123",1123456789,"cbsé@mail.com",'2021-3-10','2021-5-16',"Abrimos la convocatoria de ...",false),
VALUES("Pasteleria La Nueva",12345678912,"Tucuman","SanMiguel de Tucuman","calle falsa 123",1123456789,"pastelerialanueva@mail.com",'2021-3-2','2021-5-24',"Abrimos la convocatoria de ...",false),
VALUES("Marolio",12345678912,"Entre Rios","La Paz","calle falsa 123",1123456789,"marolio@mail.com",'2023-12-16','2021-3-16',"Abrimos la convocatoria de ...",false),
VALUES("Garbarino",12345678912,"Tucuman","Yerba Buena","calle falsa 123",1123456789,"inmmobiliariagomez@mail.com",'2020-11-3','2021-6-3',"Abrimos la convocatoria de ...",false),
VALUES("Jumbo",12345678912,"Buenos Aires","Quilmes","calle falsa 123",1123456789,"easy@mail.com",'2020-9-10','2021-3-22',"Abrimos la convocatoria de ...",false),
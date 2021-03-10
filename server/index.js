const express = require("express");
const app =express();
const cors = require("cors");
const pool = require("./db");

const jwt = require("jsonwebtoken");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//creates borrador alumnos

app.post("/alumnoBorrador", async(req, res) => {
    try{
        const {nombre,apellido,numDoc,tipoDoc,nacimiento,email,carrera,año,experiencia} = req.body;
        const newAlumno = await pool.query(
            "INSERT INTO alumnos (nombre, apellido, idDNI, tipoDNI, fechaNacimiento, mail, carrera, anioinicio, experiencia, aprobado) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
            [nombre,apellido,numDoc,tipoDoc,nacimiento,email,carrera,año,experiencia,false]
        );

        res.json(newAlumno.rows[0])
    }catch(err){
        console.log(err.message);
        res.status(500);
        res.json(err.message);
    }
})

//creates borrador empresas
app.post("/empresaBorrador", async(req, res) => {
    try{
        const {nombre,cuit,provincia,localidad,direccion,telefono,mail,inicioDeLaConv,finDeLAConv,descpPuesto} = req.body;
        const newEmpresa = await pool.query(
            "INSERT INTO empresas (nombre,cuit,provincia,localidad,direccion,telefono,mail,inicioDeLaConv,finDeLAConv,descpPuesto,aprobado) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
            [nombre,cuit,provincia,localidad,direccion,telefono,mail,inicioDeLaConv,finDeLAConv,descpPuesto,false]
        );

        res.json(newEmpresa.rows[0])
    }catch(err){
        console.log(err.message);
        res.status(500);
        res.json(err.message);
    }
})

//verify alumnos
app.put("/alumnos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updateTodo = await pool.query(
        "UPDATE alumnos SET aprobado = $1 WHERE id = $2",
        [true, id]
      );
  
      res.json("Todo was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

  app.delete("/alumnos/:id", async (req, res) => {
    try {
      const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM alumnos WHERE id = $1", 
        [id]);
      res.json("Todo was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });


//verify empresas
app.put("/empresas/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updateTodo = await pool.query(
        "UPDATE empresas SET aprobado = $1 WHERE id = $2",
        [true, id]
      );
  
      res.json("Todo was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });

  app.delete("/empresas/:id", async (req, res) => {
    try {
      const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM empresas WHERE id = $1", 
        [id]);
      res.json("Todo was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });


//get all alumnos
app.get("/alumnos/:aprob", async(req, res) => {
    const {aprob} = req.params;
    try{
        const alumnos = await pool.query(
            "SELECT * FROM alumnos where aprobado = $1",
            [aprob]
        );
        
        res.json(alumnos.rows)
    }catch(err){
        console.log(err.message);
        res.status(500);
    }
})


//get all empresas
app.get("/empresas/:aprob", async(req, res) => {
    const {aprob} = req.params;
    try{
        const empresas = await pool.query(
            "SELECT * FROM empresas where aprobado = $1",
            [aprob]
        );

        res.json(empresas.rows)
    }catch(err){
        console.log(err.message);
        res.status(500);
    }
})


//get a borrador

//login
app.post("/user/login", async(req, res) => {
    try{
        const {userid,password} = req.body;
        const user = {
            userid: userid,
            password: password}
        const body = await pool.query(
            "SELECT * FROM users WHERE userid=$1 AND password=$2 ",
            [userid,password]
        );
        if (body.rows.length == 1){
            jwt.sign({user}, 'secretkey', {expiresIn: '2h'}, (err, token) => {
                res.json({
                    token
                });
            });
        }
        else{
          res.sendStatus(403);
        }
    }catch(err){
        console.log(err.message);
        res.status(500);
        res.json(err.message);
    }
})

app.post("/user/posts", verifyToken, (req , res) => {

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                    mensaje: "Post fue creado",
                    authData
                });
        }
    });
});

function verifyToken(req, res, next){
     const bearerHeader =  req.headers['authorization'];
     if(typeof bearerHeader !== 'undefined'){
          req.token  = bearerHeader;
          next();
     }else{
         res.sendStatus(403);
     }
}



app.listen(5000, ()=> {
    console.log("server has started on port 5000")
})
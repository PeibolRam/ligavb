// 1. Importaciones
const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require('cors')


// 2. "Middlewares"
// a. Express
const app = express()

require('dotenv').config()

// b. Mongo
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, (err) => {
    if(err) return err
    console.log("Conectado a MongoDB")
})


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

const port = process.env.PORT || 3002

// 3. Modelos
const { Jugador } = require('./models/jugador')
const { Equipo } = require('./models/equipo')
const { Entrenador } = require('./models/entrenador')
const  { User } = require('./models/user')
const { auth } = require('./middleware/auth')

// 4. Rutas

/**RUTAS DE AUTENTIFICACION */

app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    })
})

/**FIN DE LAS RUTAS DE AUTENTIFICACION */

/**RUTAS USUARIOS */

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})

app.post('/api/users/login', (req, res) => {
    // 1. Encuentra el correo
        User.findOne({'email': req.body.email}, (err,user) => {
            if(!user) return res.json({loginSuccess: false, message: 'Auth fallida, email no encontrado'})

    // 2. Obtén el password y compruébalo

            user.comparePassword(req.body.password, (err, isMatch) => {
              if(!isMatch) return res.json({loginSuccess: false, message: "Wrong Password"})

    // 3. Si todo es correcto, genera un token

              user.generateToken((err, user)=> {
                    if(err) return res.status(400).send(err)
                    // Si todo bien, debemos guardar este token como un "cookie"
                    res.cookie('guitarshop_auth', user.token).status(200).json(
                        {loginSuccess: true}
                    )
                })
            })
        })
})

app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        {_id: req.user._id},
        {token: ''},
        (err, doc) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({
                success: true
            })
        }
    )
})

/**FIN DE RUTAS DE LOS USUARIOS */


/**RUTAS DE LOS JUGADORES */
//Ruta de todos los jugadores 
app.get("/jugadores", (req, res) => {
    Jugador.find({}).then(datosDeJugadores => { 
        res.send(datosDeJugadores)
    })   
})

//Ruta de un solo jugador 
app.get("/jugadores/:idJugador", (req, res) => {
    const jugadorABuscar = req.params.idJugador

    Jugador.find({idJugador:jugadorABuscar}).then(jugador => {
        res.send(jugador)
    })
})

//nuevo jugador
app.post("/jugadores/nuevo",(req,res)=>{
    //1. Crear jugador bajo modelo
    const nuevoJugador = new Jugador(req.body)

    //2. Inyectar en la base de datos y mostrar en postman que se inyectó 
    nuevoJugador.save((err,docs) => {
        res.send(docs)
    })
})

//modificar jugador
app.post("/jugadores/:idJugador/editar", (req,res)=>{
    const cambios = req.body
    const idABuscar=req.params.idJugador

    Jugador.update(
        // 1. Query o el tipo de búsqueda
        {idJugador: idABuscar },   
        // 2. El cambio    
        {$set: cambios},
        //3. El callback (cuando sucede la edición, ¿qué hacemos?)
        (err, doc) => {
            // En caso de error
            if(err) console.log(err)
            // NO HAY ERROR NO HAY ERROR
            res.send(doc)
        }
    )
})
//Eliminar jugador
app.delete("/jugadores/:idJugador", (req,res) => {
    const cambios = req.body
    const idJugadorABuscar=req.params.idJugador

    Jugador.remove(
        // 1. Query o el tipo de búsqueda
        {idJugador: idJugadorABuscar },   
        // 2. El cambio    
        {$set: cambios},
        //3. El callback (cuando sucede la edición, ¿qué hacemos?)
        (err, doc) => {
            // En caso de error
            if(err) console.log(err)
            // NO HAY ERROR NO HAY ERROR
            res.send(doc)
        }
    )
})
/**FIN RUTAS DE LOS JUGADORES */

/*--------------------------------------------------------------------------*/

/**RUTAS EQUIPOS */
//Ruta de todos los EQUIPOS 
app.get("/equipos", (req, res) => {
    Equipo.find({}).then(datosDeEquipos => { 
        res.send(datosDeEquipos)
    })   
})

//Ruta de un solo EQUIPO 
app.get("/equipos/:idEquipo", (req, res) => {
    const equipoABuscar = req.params.idEquipo

    Equipo.find({idEquipo:equipoABuscar}).then(equipo => {
        res.send(equipo)
    })
})

//nuevo EQUIPO
app.post("/equipos/nuevo",(req,res)=>{
    //1. Crear equipo bajo modelo
    const nuevoEquipo = new Equipo(req.body)

    //2. Inyectar en la base de datos y mostrar en postman que se inyectó 
    nuevoEquipo.save((err,docs) => {
        res.send(docs)
    })
})

//modificar EQUIPO
app.post("/equipos/:idEquipo/editar", (req,res)=>{
    const cambios = req.body
    const idABuscar=req.params.idEquipo

    Equipo.update(
        // 1. Query o el tipo de búsqueda
        {idEquipo: idABuscar },   
        // 2. El cambio    
        {$set: cambios},
        //3. El callback (cuando sucede la edición, ¿qué hacemos?)
        (err, doc) => {
            // En caso de error
            if(err) console.log(err)
            // NO HAY ERROR NO HAY ERROR
            res.send(doc)
        }
    )
})
//Eliminar equipo
app.delete("/equipos/:idEquipo", (req,res) => {
    const cambios = req.body
    const idEquipoABuscar=req.params.idEquipo

    Equipo.remove(
        // 1. Query o el tipo de búsqueda
        {idEquipo: idEquipoABuscar },   
        // 2. El cambio    
        {$set: cambios},
        //3. El callback (cuando sucede la edición, ¿qué hacemos?)
        (err, doc) => {
            // En caso de error
            if(err) console.log(err)
            // NO HAY ERROR NO HAY ERROR
            res.send(doc)
        }
    )
})
/**FIN RUTAS DE EQUIPOS */

/*--------------------------------------------------------------------------*/

/**RUTAS ENTRENADORES */
//Ruta de todos los ENTRENADORES 
app.get("/entrenadores", (req, res) => {
    Entrenador.find({}).then(datosDeEntrenador => { 
        res.send(datosDeEntrenador)
    })   
})

//Ruta de un solo ENTRENADOR 
app.get("/entrenadores/:idEntrenador", (req, res) => {
    const entrenadorABuscar = req.params.idEntrenador

    Entrenador.find({idEntrenador:entrenadorABuscar}).then(entrenador => {
        res.send(entrenador)
    })
})

//nuevo ENTRENADOR
app.post("/entrenadores/nuevo",(req,res)=>{
    //1. Crear ENTRENAODR bajo modelo
    const nuevoEntrenador = new Entrenador(req.body)

    //2. Inyectar en la base de datos y mostrar en postman que se inyectó 
    nuevoEntrenador.save((err,docs) => {
        res.send(docs)
    })
})

//modificar ENTRENADOR
app.post("/entrenadores/:idEntrenador/editar", (req,res)=>{
    const cambios = req.body
    const idABuscar=req.params.idEntrenador

    Entrenador.update(
        // 1. Query o el tipo de búsqueda
        {idEntrenador: idABuscar },   
        // 2. El cambio    
        {$set: cambios},
        //3. El callback (cuando sucede la edición, ¿qué hacemos?)
        (err, doc) => {
            // En caso de error
            if(err) console.log(err)
            // NO HAY ERROR NO HAY ERROR
            res.send(doc)
        }
    )
})
//Eliminar equipo
app.delete("/entrenadores/:idEntrenador", (req,res) => {
    const cambios = req.body
    const idEntrenadorABuscar=req.params.idEntrenador

    Equipo.remove(
        // 1. Query o el tipo de búsqueda
        {idEntrenador: idEntrenadorABuscar },   
        // 2. El cambio    
        {$set: cambios},
        //3. El callback (cuando sucede la edición, ¿qué hacemos?)
        (err, doc) => {
            // En caso de error
            if(err) console.log(err)
            // NO HAY ERROR NO HAY ERROR
            res.send(doc)
        }
    )
})
/**FIN RUTAS DE ENTRENADOR */



// 5. Listener (Switch prendido)
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
  })
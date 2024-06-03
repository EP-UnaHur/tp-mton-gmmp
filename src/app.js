const express = require('express')

const db = require('./db/models')
const carrerasRoute = require('./routes/carreras.route')
const materiaRoute = require('./routes/materia.route')
const profesoresRoute = require('./routes/profesores.route')
const cursosRoute = require('./routes/cursos.route')
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(carrerasRoute)
app.use(materiaRoute)
app.use(profesoresRoute)
app.use(cursosRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, async ()=>{
console.log(`La aplicacion arranco correctamente en el puerto ${PORT}`);
    try{
        await db.sequelize.authenticate()
        await db.sequelize.sync({force:true}) // BORRAR CUANDO TERMINEMOS
        const carrera = await db.Carreras.create({
            nombre: 'Cosme Fulanito',
            grado: 'AAAAAAA',
            universidad: 'Unahur'
        })
        const materia1 = await db.Materia.create({
            nombre: 'Matematica',
            cuatrimestral: true,
            anio: 1
        })
        const materia2 = await db.Materia.create({
            nombre: 'Literatura',
            cuatrimestral: false,
            anio: 2
        })
    }catch(err){
        console.log(err)
    }
})
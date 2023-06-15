const express=require('express')
const {sequalize,connecttoDB}=require('./src/config/mysqldb')
const bodyParser=require('body-parser')
//const sequelize=require('sequelize')
//const movie=require('./src/models/movies_table')
const app= express()
const routes= express.Router()
const movieInfo= require('./src/routers/movies')
const data_init=require('./src/helpers/dataInsert')

const PORT=3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(routes);




routes.get('/',(req,res)=>{
    res.status(200).send('Welcome')
})

routes.use('/',movieInfo)



app.listen(PORT,async ()=>{
    console.log('Server is running at 3000')
    await connecttoDB()
  // await data_init()
})

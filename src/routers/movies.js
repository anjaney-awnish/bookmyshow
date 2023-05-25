const express= require('express');
const bodyParser=require('body-parser');
const { Movie, Showtime } = require('../models/movies_table');
const app=express();
const movieRoutes=express.Router();

movieRoutes.get('/:date',(req,res)=>{
    try{
        const date=req.params

        const moviewithShowtimes=  Movie.findAll({
            include:{
                model: Showtime,
                where: {
                    show_date: date
                }
            }
        })

        res.send(200).json(moviewithShowtimes)
    }

    catch(error){
        res.status(500).json({error:"Sever error"})
    }


})


module.exports=movieRoutes
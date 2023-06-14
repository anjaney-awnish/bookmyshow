const express= require('express');
const bodyParser=require('body-parser');
const { Movie, Showtime ,Theatre} = require('../models/movies_table');
const app=express();
const movieRoutes=express.Router();


movieRoutes.get('/theatre',async (req,res)=>{
    try{
        const theatre_details= await Theatre.findAll()
        res.status(200).json(theatre_details)
    }
    catch(error){
        res.status(500).json({error:"server error"})
    }
    
})

movieRoutes.get('theatre/:theatre_name',async(req,res)=>{
    try{
        const name=req.params
        const moviesInTheatre= await Movies.findAll({
            include:{
                model:Theatre,
                where: {
                    theatre_name: name
                }
            }
        })
        res.status(200).json(moviesInTheatre)
    }
    catch{
        res.status(500).json({
            error:"Server error"
        })
    }
})



movieRoutes.get('/:date',async (req,res)=>{
    try{
        const date=req.params

        const moviewithShowtimes= await Movie.findAll({
            include:{
                model: Showtime,
                where: {
                    show_date: date
                }
            }
        })

        res.status(200).json(moviewithShowtimes)
    }

    catch(error){
        res.status(500).json({error:"Sever error"})
    }
})








module.exports=movieRoutes
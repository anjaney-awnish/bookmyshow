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

movieRoutes.get('/theatre/:theatre_id', async (req, res) => {
    try {
      const theatreId = req.params.theatre_id; 
      const showsInTheatre = await Showtime.findAll({
        where: {
          TheatreTheatreId: theatreId 
        }
      });
      res.status(200).json(showsInTheatre);
    } catch (error) {
      res.status(500).json({
        error: "Server error"
      });
    }
  });



  movieRoutes.get('/movie/:show_id', async (req, res) => {
    try {
      const showId = req.params.show_id; 
      const movieAtShow = await Movie.findAll({
        where: {
          ShowtimeShowtimeId: showId
        }
      });
      res.status(200).json(movieAtShow);
    } catch (error) {
      res.status(500).json({
        error: "Server error"
      });
    }
  });


module.exports=movieRoutes
const {Movie,Showtime,Theatre}=require('../../src/models/movies_table')
const Sequelize=require('sequelize')
const { sequelize } = require('../config/mysqldb')

const data=async()=>{
   await Movie.bulkCreate([{
    movie_name: "Gunda",
    theatre_id: 1
},
{
    movie_name: "Koyla",
    theatre_id: 1
},
{
    movie_name: "Rakh",
    theatre_id: 2
},
{
    movie_name: "Krantiveer",
    theatre_id: 3
}])
}



module.exports=data

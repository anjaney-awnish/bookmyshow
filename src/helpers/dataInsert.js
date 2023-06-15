const {Movie,Showtime,Theatre}=require('../../src/models/movies_table')
const Sequelize=require('sequelize')
const { sequelize } = require('../config/mysqldb')

const data=async()=>{

await Theatre.bulkCreate([
{
    theatre_name:"GT Talkies"
},
{
    theatre_name: "Palak Talkied"
}
]

)


await Showtime.bulkCreate(
    [
        {
            show_date:"2021-12-14",
            show_time:"18:30",
            TheatreTheatreId:1
        },
        {show_date:"2021-12-15",
        show_time:"11:30",
        TheatreTheatreId:1

        },
        {
            show_date:"2021-11-14",
            show_time:"13:30",
            TheatreTheatreId:2
        }
    ]
)


   await Movie.bulkCreate([{
    movie_name: "Gunda",
    ShowtimeShowtimeId:1
},
{
    movie_name: "Koyla",
    ShowtimeShowtimeId:2
},
{
    movie_name: "Rakh",
    ShowtimeShowtimeId:3
}])




}



module.exports=data

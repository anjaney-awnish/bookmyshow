const {sequelize}= require('../config/mysqldb')
const Datatypes= require('sequelize')

const Movie= sequelize.define('movie',{
    movie_id:{
        type: Datatypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    movie_name: {
        type: Datatypes.STRING(100),
        allowNull:false
    } 
} )


const Showtime = sequelize.define('Showtime', {
    showtime_id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    show_date: {
      type: Datatypes.DATEONLY,
      allowNull: false,
    },
    show_time: {
      type: Datatypes.TIME,
      allowNull: false,
    }
  })

Movie.hasMany(Showtime);
Showtime.belongsTo(Movie);

sequelize.sync()

module.exports={
    Movie,Showtime
}
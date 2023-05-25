const Sequelize=  require('sequelize')

const sequelize= new Sequelize(
    'bookmyshow',
    'anjaney',
    'awnish@123',{
        dialect: 'mysql',
        host: 'localhost'
    })

const connecttoDB = async() =>{
    try{
        await sequelize.authenticate();
        console.log('Successfully connected to database')
    }
    catch(error){
        console.log(error)
    }
}

module.exports={sequelize,connecttoDB}
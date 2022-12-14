import mongoose from "mongoose"

const dbConnection= async()=>{

    try{
       await mongoose.connect(process.env.MONGODB_CNN,{

        useNewUrlParser:true,
        useUnifiedTopology:true
        



       });

       console.log("base de datos online")

    } catch(err){

        console.error(err);
        throw new Error("Error en la conexion de la base de datos");
    }


}

export default dbConnection;
import express from 'express'
import dotenv from 'dotenv/config';
import cors from 'cors';
import corsConfig from '../config/cors.mjs'
import bodyParser from 'body-parser';
import router from '../routes/user.mjs';
import dbConnection from '../database/config.mjs';



class server{

    constructor(){

this.app = express()
this.port= process.env.PORT
//this.jsonParser = bodyParser.json()

this.middleware()

this.routes();


    }

    middleware(){
        this.app.use(cors(corsConfig));
        this.conectar();



        this.app.use(express.static('public'))
        this.app.use(express.json({limit: '25mb'}));
        this.app.use(express.urlencoded({limit: '25mb', extended: true}));
       // this.app.use(express.json({limit: '50mb}));
      //  this.app.use(jsonParser.json());
        //this.app.use(express.urlencoded({ extended: true }));

    }


    routes(){


 this.app.use('/api/usuarios',router);
    }

    listen(){

this.app.listen(this.port, () => {
  console.log('Example app listening on port',this.port)
})

    }
    async conectar() {

        await dbConnection();


    }



}
export default new server();
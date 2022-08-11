import express from 'express'
import dotenv from 'dotenv/config';
import cors from 'cors';
import corsConfig from '../config/cors.mjs'
import bodyParser from 'body-parser';
import router from '../routes/user.mjs';




class server{

    constructor(){

this.app = express()
this.port= process.env.PORT
this.jsonParser = bodyParser.json()

this.routes();


    }

    middleware(){
        this.app.use(cors(corsConfig));



        this.app.use(express.static('public'))

        this.app.use(express.json());
        this.app.use(jsonParser.json());
        //this.app.use(express.urlencoded({ extended: true }));

    }


    routes(){


 this.app.use('/api/usuarios',this.jsonParser,router);
    }

    listen(){

this.app.listen(this.port, () => {
  console.log('Example app listening on port',this.port)
})

    }



}
export default new server();
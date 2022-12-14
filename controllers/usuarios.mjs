import { response } from "express"
import bcryptjs  from "bcryptjs"
import {validationResult} from "express-validator"

//import HttpCode from '../../configs/httpCode.mjs';
import Usuario from '../models/usuario.mjs'
import recibido from '../models/guardar.mjs'
 class usuarioController {

    static async usuariosGet(req, res= response) {
      const{prueba,algo,prueba2}=req.query;

      var resultado= [];

      resultado.push(prueba);
      resultado.push(algo);
      resultado.push(prueba2);

     resultado = resultado.map((a)=>{


      return "aqui va"+a;



      })
      

        res.json({


            msg: 'get API',
            resultado: resultado
    
        });
       
      }

      static async usuariosPut(req, res= response) {
        const algo = req.params.id;
        
        console.log(algo);
        res.json({

            msg: 'put API'
            ,algo
    
        });
       
      }

      static async usuariosPost(req, res= response) {
 
        const {nombre,correo,password,rol} = req.body;
       
        const usuario =   new Usuario({nombre,correo,password,rol});
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password,salt);

        usuario.save();
         
        /*
          guard.entrega=JSON.stringify(body);
          
        guard.save();*/



         


        
       
        
        res.json({
            
          code: 201,
          


            msg: 'post algo API',
      usuario: usuario
    
        });
       
      }

      static async usuariosDelete(req, res= response) {
        res.json({

            msg: 'delete API'
    
        });
       
      }


   
    
    
}

const usuariosPost = (req, res= response) => {
    const algo = req.body;
    
    console.log(algo);
    res.json({
        


        msg: 'post algo API',
   algo

    });
   
  }

  export {

    usuarioController,usuariosPost



  }
import { response } from "express"

//import HttpCode from '../../configs/httpCode.mjs';

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
        const algo = req.body;
        
        console.log(req.body);
        res.json({
            


            msg: 'post algo API',
      algo: algo
    
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
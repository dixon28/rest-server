import { Router } from "express";
//import {usuariosGet,usuariosPost,usuariosPut,usuariosDelete} from "../controllers/usuarios.mjs";
import {usuarioController,usuariosPost} from "../controllers/usuarios.mjs"
import call from '../app/utils/Call.mjs'
const router = new Router();
import {check} from "express-validator";
import validarCampos from "../middleware/validar-campos.mjs";


router.get('/',call(usuarioController.usuariosGet))

  router.put('/:id',usuarioController.usuariosPut)

  router.post('/',[
    check('nombre','El password debe de ser mas de 6 letras').not().isEmpty(),
  check('password','El password debe de ser mas de 6 letras').isLength({min:6}),validarCampos
  ]
  ,usuarioController.usuariosPost)
  router.delete('/:id',usuarioController.usuariosDelete)
/*

  router.delete('/',usuariosDelete)
  
*/
export default router;
import { Router } from "express";
//import {usuariosGet,usuariosPost,usuariosPut,usuariosDelete} from "../controllers/usuarios.mjs";
import {usuarioController,usuariosPost} from "../controllers/usuarios.mjs"
import call from '../app/utils/Call.mjs'
const router = new Router();


router.get('/',call(usuarioController.usuariosGet))

  router.put('/:id',usuarioController.usuariosPut)

  router.post('/',usuarioController.usuariosPost)
  router.delete('/:id',usuarioController.usuariosDelete)
/*

  router.delete('/',usuariosDelete)
  
*/
export default router;
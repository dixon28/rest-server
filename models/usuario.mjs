import  Schema  from 'mongoose';
import model from 'mongoose';
const UsuarioSchema = Schema.Schema({

    nombre: {
        type: String,
        required: [true,'El nombre es obligatorio']



    },
    correo: {
        type: String,
        required: [true,'El correo es obligatorio'],
        unique: true



    },
    password: {
        type:String,
        required: [true,'El password es obligatorio']



    },
    img:{

        type: String



    },
    rol:{

        type: String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']

    }
    ,
    google: {

        type:Boolean,
        default: false


    }




});

UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}


export default  model.model('Usuario',UsuarioSchema);
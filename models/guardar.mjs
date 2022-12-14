import  Schema  from 'mongoose';
import model from 'mongoose';
const RecibidoSchema = Schema.Schema({

    entrega: {
        type: String,
        



    }


});

RecibidoSchema.methods.toJSON = function() {
    const {  ...recibido  } = this.toObject();
    return recibido;
}


export default  model.model('recibido',RecibidoSchema);
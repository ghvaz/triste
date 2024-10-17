/**
plate - 
    a placa do veículo (String)
model - 
    o modelo do veículo (String)
year - 
    o ano de fabricação do veículo (Number)
owner - 
    o nome do proprietário do veículo (String)
maintenances - 
    array que armazena as manutenções realizadas no veículo 
        (Array de ObjectId em referência a Maintence)
 */

import bd from "../config/banco.js"

const SchemaCarro = new bd.Schema({
    plate:{
        type: String,
        required: true,
        unique: true
    },
    model:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true
    },
    owner:{
        type: String,
        default: "Dono não se identificou"
    },
    maintenances:{
        type: [bd.Schema.Types.ObjectId],
        ref: "Maintenance"
    },
})

export default bd.model("Vehicle", SchemaCarro)
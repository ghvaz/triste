/**
workshop: {},
    referenciando a oficina onde a manutenção foi realizada
            (ObjectId em referência ao Workshop)
vehicle:{},
    referenciando o veículo que foi submetido à manutenção
            (ObjectId em referência ao Vehicle)
services:{},
    os serviços prestados, cada um contendo 
        o nome do serviço e o preço (Array de Objects com name (String) e price (Number)
date:{},
    a data em que a manutenção foi realizada (Date)
totalCost:{},
    valor total da manutenção (Number)
*/



import bd from  "../config/banco.js"
const SchemaMaintenance = new bd.Schema({
    workshop: {
        type: bd.Schema.Types.ObjectId,
        ref: "Workshop",
        required: true
    },
    vehicle:{
        type: bd.Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },
    services:{
        type: [{
            name:{
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
    totalCost:{
        required:true,
        type:Number
    },
})

export default bd.model("Maintenance", SchemaMaintenance)
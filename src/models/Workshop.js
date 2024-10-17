import bd from "../config/banco.js"

/*
    name - o nome da oficina (String)
    address - o endereço completo da oficina (String)
    specialties - uma lista de especialidades da oficina ex: 
    motor, freios, suspensão (Array de Strings)
*/

const SchemaOficina = new bd.Schema({
    name:{
        type: String,
        required: true },

    address: {
        type: String,
        required: true },
        
    specialties: {
        type: [String],
        default: ["Sem especialidades"] },
    
})

export default bd.model("Workshop", SchemaOficina)

/**
 * 
 * 
 * 
 * askjçlfdhialusbdiçhuabsd qaliwus dgiçypawgf d
 * toma no cu
 * 
 */
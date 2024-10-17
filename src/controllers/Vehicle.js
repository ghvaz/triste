import model from "../models/Vehicle.js"

export default {
    store: async function(req, res){
        try {
            let Veiculo = await model.create(req.body)
            res.status(201).json( `Veiculo cadastrada: ${Veiculo}`)
        } catch (error) {
            res.status(400).json(`ERRO NO CADASTRO DA VEICULO: ${error} `)
        }
    },
    index: async function(req, res){
        try {
            let Veiculos = await model.find()
            res.status(200).json(Veiculos)
        } catch (error) {
            res.status(400).json(`ERRO NA LISTAGEM:  ${error}`)
        }
    },
    update: async function(req, res){
        try {
            let Veiculo = await model.findByIdAndUpdatse({_id: req.params.id}, req.body)    
            res.status(200).json("Veiculo atualizado.")
        } catch (error) {
            res.status(400).json(`ERRO NA ATUALIZAÇÃO:  ${error}`)
        }
    },
    destroy: async function(req, res){
        try {
            let Veiculo = await model.findByIdAndDelete(req.params.id, req.body)    
            res.status(200).json(`Deletada a veiculo:  ${Veiculo}`)
        } catch (error) {
            res.status(400).json(`ERRO AO DELETAR:  ${error}`)
        }
    },
}
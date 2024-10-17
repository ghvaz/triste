import model from "../models/Maintenance.js"

export default {
    store: async function(req, res){
        try {
            let manutencao = await model.create(req.body)
            res.status(201).json( `Manutenção cadastrada: ${manutencao}`)
        } catch (error) {
            res.status(400).json("ERRO NO CADASTRO DA MANUTENÇÃO: "+ error)
        }
    },
    index: async function(req, res){
        try {
            let manutencaos = await model.find()
            res.status(200).json(manutencaos)
        } catch (error) {
            res.status(400).json("ERRO NA LISTAGEM: "+ error)
        }
    },
    update: async function(req, res){
        try {
            let manutencao = await model.findByIdAndUpdate({_id: req.params.id}, req.body)  
            manutencao = await model.findById(req.params.id)
            res.status(200).json(manutencao)
        } catch (error) {
            res.status(400).json("ERRO NA ATUALIZAÇÃO: "+ error)
        }
    },
    destroy: async function(req, res){
        try {
            let manutencao = await model.findByIdAndDelete(req.params.id, req.body)    
            res.status(200).json("Deletada a MANUTENÇÃO: "+manutencao)
        } catch (error) {
            res.status(400).json("ERRO AO DELETAR: "+ error)
        }
    },
}
import model from "../models/Workshop.js"

/**
    Criar Oficina (store): 
        Endpoint para criar uma nova oficina.
    Listar Oficinas (index): 
        Endpoint para listar todas as oficinas cadastradas.
    Atualizar Oficina (update): 
        Endpoint para atualizar os dados de uma oficina específica.
    Deletar Oficina (destroy): 
        Endpoint para deletar uma oficina.
 */

export default {
    store: async function(req, res){
        try {
            let oficina = await model.create(req.body)
            res.status(201).json( `Oficina cadastrada: ${oficina}`)
        } catch (error) {
            res.status(400).json("ERRO NO CADASTRO DA OFICINA: "+ oficina)
        }
    },
    index: async function(req, res){
        try {
            let oficinas = await model.find()
            res.status(200).json(oficinas)
        } catch (error) {
            res.status(400).json("ERRO NA LISTAGEM: "+ error)
        }
    },
    update: async function(req, res){
        try {
            let oficina = await model.findByIdAndUpdate(req.params.id, req.body)    
            res.status(200).json(oficina)
        } catch (error) {
            res.status(400).json("ERRO NA ATUALIZAÇÃO: "+ error)
        }
    },
    destroy: async function(req, res){
        try {
            let oficina = await model.findByIdAndDelete(req.params.id, req.body)    
            res.status(200).json("Deletada a oficina: "+oficina)
        } catch (error) {
            res.status(400).json("ERRO AO DELETAR: "+ error)
        }
    },
}
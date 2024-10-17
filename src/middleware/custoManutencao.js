const custo = (req, res, next) => {
        if(req.body.services.lenght == 0){
            res.status(400).json("sem servição")
        }else{
            let valorFinal = 0 
            req.body.services.forEach(el=>{
                valorFinal += Number(el.price)
            })
            req.body.totalCost = valorFinal
            next()

        }
}
export default custo
import e from "express"
import "dotenv/config"

const app = e()
app.use(e.json())

import rt_oficina from "./routes/Workshop.js"
app.use("/oficina", rt_oficina)

import rt_veiculo from "./routes/Vehicle.js"
app.use("/carro", rt_veiculo)

import rt_manut from "./routes/Maintenance.js"
app.use("/manut", rt_manut)




app.listen(process.env.PORT, () => {
    try {
        console.log("acessando na porta "+process.env.PORT);
    } catch (error) {
        console.log(error);
    }
})
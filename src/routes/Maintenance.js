import ctrl from "../controllers/Maintenance.js"
import e from "express"
const rt = e.Router()

import valor from "../middleware/custoManutencao.js"

rt.get("/", ctrl.index)
rt.post("/",valor, ctrl.store)
rt.delete("/:id", ctrl.destroy)
rt.put("/:id",valor, ctrl.update)

export default rt

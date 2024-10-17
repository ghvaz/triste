import ctrl from "../controllers/Vehicle.js"
import e from "express"

const rt = e.Router()

rt.get("/", ctrl.index)
rt.post("/", ctrl.store)
rt.delete("/:id", ctrl.destroy)
rt.put("/:id", ctrl.update)

export default rt

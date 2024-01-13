const stockRouter = require("express").Router()
const {addFloorsheet, getFLoorsheet, getFundamenatals} = require("../controllers/stocks")



stockRouter.route("/floorsheet/add").post(addFloorsheet)
stockRouter.route("/floorsheet/:code").get(getFLoorsheet)
stockRouter.route("/fundamentals/:code").get(getFundamenatals)






module.exports = {stockRouter}
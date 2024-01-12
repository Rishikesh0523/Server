const stockRouter = require("express").Router()
const {addFloorsheet, getFLoorsheet} = require("../controllers/stocks")



stockRouter.route("/floorsheet/add").post(addFloorsheet)
stockRouter.route("/floorsheet/:code").get(getFLoorsheet)






module.exports = {stockRouter}
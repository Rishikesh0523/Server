const stockRouter = require("express").Router()
const {addFloorsheet, getFLoorsheet, getFundamentals, addFundamentals, getAllFundamentals} = require("../controllers/stocks")



stockRouter.route("/floorsheet/add").post(addFloorsheet)
stockRouter.route("/floorsheet/:code").get(getFLoorsheet)
stockRouter.route("/fundamentals/:code").get(getFundamentals).post(addFundamentals)
stockRouter.route("/fundamentals").get(getAllFundamentals)



module.exports = {stockRouter}
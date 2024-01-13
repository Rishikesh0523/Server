const { db } = require("../db/firebase");
const {scrapeInfo} = require("./puppeteer");


const addFloorsheet = async(req, res)=>{
    try {
        const {code, data }= req.body
        const  stock = await db.collection("floorsheet").where("code", "==", code).get()
        console.log(stock.docs[0])
        if(!stock.docs[0]){
            console.log("here")
              stock = await db.collection("floorsheet").add({code, data});
              res.json({msg:"added"})
            }
            else{
                console.log("enters' this block")
                const id = stock.docs[0].id
                 await db.collection("floorsheet").doc(id).update({code, data })
                res.json({msg:"updated"})
        }

} catch (error) {
        res.json(error)
    }
}

const getFLoorsheet = async(req, res)=>{
    try {
        const {code} = req.params
        const  stock = await db.collection("floorsheet").where("code", "==", code).get()
    if(stock.docs[0]){
        res.status(200).json({msg:"success", data:stock.docs[0].data()})
    }
    else{
        res.json({msg:"failure"})
    }

    } catch (error) {
        
    }
}

const getFundamenatals=async(req,res)=>{
    try{
    const {code} = req.params
    let data = await scrapeInfo(code);
    if(data){
        console.log("=======================\n" , data)
        res.status(200).json({msg:"success", fundamentals: data}) ;
    }else{
        res.status(404).json({msg: "not found"})
    }
    }catch(error){
        res.status(500).json(error)
    }
}

module.exports = {addFloorsheet, getFLoorsheet, getFundamenatals}
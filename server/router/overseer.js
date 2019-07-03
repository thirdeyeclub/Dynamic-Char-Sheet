const router = require("express").Router();
const Fx = require("./dbfuntions")

router.get('/', async (req, res)=>{
    try{
        const sheets = await Fx.findExample();
        var notice = 'data located'
        res.status(200).json({
            notice , sheets
        })
    } catch(error){
        res.status(500).json({
            message: "An error has appeared", error
        })
    }
})
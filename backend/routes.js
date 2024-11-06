const express = require("express")
const router = express.Router()
const socialUsersSchema = require("./models/model")

// router.get("/users/:name", async(req, res)=>{
//     const name = req.params.name
//     const data = await socialUsersSchema.findOne({name})
//     res.json(data)
// })

router.get("/users/:name", async(req, res)=>{
    const name = req.params.name
    try{
        const data = await socialUsersSchema.findOne({name: name})
        res.json(data)
    }catch(error){
        res.send(error)
    }
    
})

router.get("/users", async (req, res)=>{
    try{
        const data = await socialUsersSchema.find()
        res.json(data)
    }catch(error){
        res.send(error)
    }
})

router.post("/user", (req, res)=>{
    const newSocialUser = new socialUsersSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    newSocialUser.save()
    .then((data)=>{
        res.json(data)
    })
})

module.exports = router
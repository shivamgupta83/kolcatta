const router=require("express").Router()
const {createUser,loginUser}= require("../controllers/userController")
const ticket2=require("../controllers/ticketControlller")

router.post("/createUser",createUser)
router.post("/login",loginUser )
router.post("/createTicket",ticket2)




module.exports=router
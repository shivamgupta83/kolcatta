const router=require("express").Router()
const {createUser,loginUser}= require("../controllers/userController")
const {ticket2,gettickets}=require("../controllers/ticketControlller")


// give email password name to create user
router.post("/createUser",createUser)

// to login user plese give email password
router.post("/login",loginUser )

// to create tickets give token in accesstoken by userId which is present in token it will fetch
router.post("/createTicket",ticket2)

//to get all tickets plese give header by header it fetch userId then give all ticket of respective id
router.get("/getticket",gettickets)



module.exports=router
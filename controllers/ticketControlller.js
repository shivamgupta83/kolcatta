const jwt = require("jsonwebtoken");
const ticketModels = require("../models/ticketModels");

//logic of to create ticket
function ticketGenrator() {
    function result1() {
        let result = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]

        for (let b = 0; b < 3; b++) {
            for (let a = 0; a < 5; a++) {

                if (b == 0) {
                    let index = Math.floor(Math.random() * 9)
                    let random = Math.floor(Math.random() * 90 + 1)
                    result[b][index] = random
                    while (result[0][index] < result[1][index] && result[1][index] > result[0][index]) {
                        random = Math.floor(Math.random() * 90 + 1)
                        result[0][index] = random
                    }
                }
            }
            if (b == 1) {
                let index = Math.floor(Math.random() * 9)
                let random = Math.floor(Math.random() * 90 + 1)
                result[1][index] = random

                while (result[1][index] > result[0][index] && result[1][index] < result[2][index]) {
                    random = Math.floor(Math.random() * 90 + 1)
                    result[1][index] = random
                }
            }

            if (b == 2) {
                let index = Math.floor(Math.random() * 9)
                let random = Math.floor(Math.random() * 90 + 1)
                result[2][index] = random

                while (result[2][index] > result[0][index] && result[2][index] > result[1][index]) {
                    random = Math.floor(Math.random() * 90 + 1)
                    result[2][index] = random
                }
            }

        }



        let arrOcount = 0

        let arrTcount = 0

        let arrTHcount = 0


        for (let a2 = 0; a2 < 9; a2++) {
            if (result[0][a2] > 0) {
                arrOcount++
            }
            if (result[1][a2] > 0) {
                arrTcount++
            }
            if (result[2][a2] > 0) {
                arrTHcount++
            }
        }

        if (arrOcount < 5) {
            while (arrOcount < 5) {
                let index = result[0].indexOf(0)
                let random = Math.floor(Math.random() * 90 + 1)
                result[0][index] = random;
                // console.log(index,random,result[0][index])
                while (result[0][index] < result[1][index] && result[0][index] < result[2][index]) {
                    random = Math.floor(Math.random() * 90 + 1)
                    result[0][index] = random;
                }
                arrOcount++;
            }
        }

        if (arrTcount < 5) {
            while (arrTcount < 5) {
                let index = result[1].indexOf(0)
                let random = Math.floor(Math.random() * 90 + 1)
                result[1][index] = random;
                while (result[1][index] > result[0][index] && result[1][index] < result[2][index]) {
                    random = Math.floor(Math.random() * 90 + 1)
                    result[1][index] = random;
                }
                arrTcount++;
            }
        }

        if (arrTHcount < 5) {
            while (arrTHcount < 5) {
                let index = result[2].indexOf(0)
                let random = Math.floor(Math.random() * 90 + 1)
                result[2][index] = random;
                while (result[2][index] > result[0][index] && result[2][index] > result[1][index]) {
                    random = Math.floor(Math.random() * 90 + 1)
                    result[2][index] = random;
                }
                arrTHcount++;
            }
        }
        return result;
    }
    let ticket1 = result1()
    let ticket2 = result1()
    return ([ticket1, ticket2])
}




const ticket2 = async (req, res) => {

    try {
        let token = req.header("accesstoken")
        if (!token) return res.status(400).send({ status: false, message: "Access Token is not present" })

        let userId = 0;

        jwt.verify(token, "secret", (err, data) => {
            if (err) return res.status(401).send({ status: false, message: "token is not valid" })
            else {
                userId = data.userId
            }
        })

        console.log("ticket is creating")

        let result = ticketGenrator();
        console.log(result)

        let ticketCreated = await ticketModels.create({ userId: userId, ticket: result })

        return res.status(201).send({ status: true, ticketId: ticketCreated._id })
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }

}

const gettickets = async (req, res) => {
    try {
        let token = req.header("accesstoken")
        if (!token) return res.status(400).send({ status: false, message: "Access Token is not present" })

        let userId = 0;

        jwt.verify(token, "secret", (err, data) => {
            if (err) return res.status(401).send({ status: false, message: "token is not valid" })
            else {
                userId = data.userId
            }
        })

        console.log(userId)

        const allTickets = await ticketModels.find({ userId: userId })
        if (!allTickets) return res.status(400).send({ status: false, message: "no avilable" })
        return res.status(200).send({ status: true, message: allTickets })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}



module.exports = { ticket2, gettickets }
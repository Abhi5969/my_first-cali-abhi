const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MiddleMW=require("../middleMW/commonMW")
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/users", userController.createUser  )

router.post("/login", userController.login)

router.get("/users/:userId",MiddleMW.MidMW ,userController.getuser)

router.put("/users/:userId",MiddleMW.MidMW , userController.update)

router.delete("/users/:userId",MiddleMW.MidMW , userController.deleteUser)


module.exports = router;
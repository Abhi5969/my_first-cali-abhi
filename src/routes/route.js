const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MIddleWare=require("../middleware/MidMW")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)


router.get("/users/:userId", MIddleWare.MidMW ,userController.getuser)

router.put("/users/:userId",MIddleWare.MidMW ,userController.updateUser)

router.delete('/users/:userId',MIddleWare.MidMW ,userController.deleteUser)

module.exports = router;
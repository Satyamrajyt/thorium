const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const BookModels = require("../models/bookModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("Get request !")
})

router.post("/createUser", UserController.createUser  );

router.get("/getUsersData", UserController.getUsersData);


router.post("/createBook", BookController.createBook  );
router.get("/getBooksData", BookController.getBooksData);
module.exports = router;
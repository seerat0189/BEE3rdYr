const express = require("express");
const router = express.Router();
const Users = require("../model/user")
const {postAddUser, getAllUsers, getOneUser} = require("../controller/userController")
router.post("/", postAddUser)
router.get("/", getAllUsers)
router.get("/:id", getOneUser)

module.exports = router
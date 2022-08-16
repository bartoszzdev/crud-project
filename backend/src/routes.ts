import express from 'express'
const router = express.Router()

// get all
// post  a new one
// get one 
// patch 
// delete

import { createNewUser, getUsers, deleteUser, getSingleUser, updateUser } from "./controllers/UserController"

router.get("/", getUsers)
router.post("/", createNewUser)
router.delete("/:id", deleteUser)
router.get("/:id", getSingleUser)
router.patch("/:id", updateUser)
//router.get("/send", sendMessage)

export default router
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// get all
// post  a new one
// get one 
// patch 
// delete
const UserController_1 = require("./controllers/UserController");
router.get("/", UserController_1.getUsers);
router.post("/", UserController_1.createNewUser);
router.delete("/:id", UserController_1.deleteUser);
router.get("/:id", UserController_1.getSingleUser);
router.patch("/:id", UserController_1.updateUser);
//router.get("/send", sendMessage)
exports.default = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getSingleUser = exports.deleteUser = exports.createNewUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("../model/User"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find({});
        if (!users.length) {
            return res.status(404).json({ msg: "No such user found" });
        }
        return res.status(200).json({ users });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Something went wrong" });
    }
});
exports.getUsers = getUsers;
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.create(req.body);
        return res.status(201).json({ user });
    }
    catch (error) {
        return res.status(500).json({ msg: "Validation not accepted" });
    }
});
exports.createNewUser = createNewUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userID } = req.params;
    try {
        const user = yield User_1.default.findOneAndDelete({ _id: userID });
        return res.status(200).json({ user: user });
    }
    catch (error) {
        return res.status(500).json({ msg: `There's no user with id: ${userID}` });
    }
});
exports.deleteUser = deleteUser;
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userID } = req.params;
    try {
        const user = yield User_1.default.findOne({ _id: userID });
        return res.status(200).json({ user: user });
    }
    catch (error) {
        return res.status(500).json({ msg: `There's no user with id: ${userID}` });
    }
});
exports.getSingleUser = getSingleUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userID } = req.params;
    try {
        const user = yield User_1.default.findOneAndUpdate({ _id: userID }, req.body, {
            new: true,
            runValidators: true,
        });
        return res.status(200).json({ user: user });
    }
    catch (error) {
        return res.status(500).json({ msg: `There's no user with id: ${userID}` });
    }
});
exports.updateUser = updateUser;

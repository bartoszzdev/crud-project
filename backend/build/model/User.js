"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Please provide a valid name"],
    },
    job: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        minlength: [8, "Please provide a real phonenumber"],
        validate: {
            validator: (v) => {
                return /\(\d{2}\)\s\d{1}\s\d{4}-\d{4}/.test(v);
            }
        }
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});
exports.default = (0, mongoose_1.model)("User", userSchema);

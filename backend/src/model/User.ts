import { Schema, model } from "mongoose"

interface IUser {
    name: string,
    job: string,
    phone: string,
    email: string
}

const userSchema = new Schema<IUser>({
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
            validator: (v: string) => {
                return /\(\d{2}\)\s\d{1}\s\d{4}-\d{4}/.test(v)
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
})

export default model("User", userSchema)
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "Username already exist" ],
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist"],
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }

},{timestamps: true}
)

export const User = mongoose.model("User", userSchema)
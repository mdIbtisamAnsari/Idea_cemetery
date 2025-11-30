import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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

userSchema.plugin(mongooseAggregatePaginate)

export const User = mongoose.model("User", userSchema)
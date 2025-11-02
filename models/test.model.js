import mongoose from "mongoose";

const testScheme = new mongoose.Schema({
    context:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    anarray:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},{timestamps: true}
)
import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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


export const Test = mongoose.model("Test", testScheme)
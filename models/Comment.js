import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Comment is required"
    },
    createAt: {
        type: Date,
        default: Date.now,
        required: "Comment is required"
    } 
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
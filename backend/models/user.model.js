import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    organisation: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    emailId: {
        type: String,
        default: ""
    }

}, { timestamps: true }) //used for member since this this year

const User = mongoose.model("User", UserSchema);
export default User;


import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name!"],
    },
    username: {
        type: String,
        required: [true, "Please provide an username!"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email adress!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"]
    },
    language: {
        type: String,
        required: [true, "Please provide a language!"]
    }
})

const User = models.User || model("User", userSchema);
export default User
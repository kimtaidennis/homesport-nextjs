import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    balance: {
        type: Number,
        default: 1000,
    },
});

const User = models?.User || model("User", UserSchema);

export default User;
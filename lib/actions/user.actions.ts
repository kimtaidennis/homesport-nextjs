import { revalidatePath } from "next/cache";
import User from "../database/models/user.models";
import { connectToDatabase } from "../database/mongose";

// CREATE
export async function createUser(user: CreateUserParams) {
    try {

        await connectToDatabase();
        const newUser = await User.create(user);
    
        return JSON.parse(JSON.stringify(newUser));

    } catch (error) {
        console.log('Create User Error:',error);
        
    }
}

// READ
export async function getUserById(userId: string) {
    try {

        await connectToDatabase();
        const user = await User.findOne({ clerkId: userId });
    
        if (!user) throw new Error("User not found");
    
        return JSON.parse(JSON.stringify(user));

    } catch (error) {
        console.log('Read User Error:',error);
    }
}
  
  // UPDATE
  export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {

        await connectToDatabase();
        const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
            new: true,
        });
    
        if (!updatedUser) throw new Error("User update failed");
        
        return JSON.parse(JSON.stringify(updatedUser));
    } catch (error) {
        console.log('Update User Error:',error);
    }
  }
  
// DELETE
export async function deleteUser(clerkId: string) {
    try {

        await connectToDatabase();
        // Find user to delete
        const userToDelete = await User.findOne({ clerkId });
    
        if (!userToDelete) {
            throw new Error("User not found");
        }
    
        // Delete user
        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath("/");
    
        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;

    } catch (error) {
        console.log('Delete User Error:',error);
    }
}
  
// USE CREDITS
export async function updateBalance(userId: string, creditFee: number) {
    try {
        
        await connectToDatabase();
        const updatedUserBalance = await User.findOneAndUpdate(
            { _id: userId },
            { $inc: { balance: creditFee }},
            { new: true }
        )
    
        if(!updatedUserBalance) throw new Error("User credits update failed");
    
        return JSON.parse(JSON.stringify(updatedUserBalance));

    } catch (error) {
        console.log('Update Balance User Error:',error);
    }
}
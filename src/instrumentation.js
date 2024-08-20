import connectDB from "./lib/mongodb/connectDB"

export async function register() {
    await connectDB();
}
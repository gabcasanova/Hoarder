import connectMongoDB from "./mongodb";
import User from "../../models/user";

export async function getUserByEmail(email: string) {
  await connectMongoDB();
  return await User.findOne({ email });
}
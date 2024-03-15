import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const connect = await mongoose.connect(
      "mongodb+srv://nandu2255n:nandu123@machine-test.tp783vl.mongodb.net/Machine-test?retryWrites=true&w=majority"
    );
    console.log(`mongodb connected:${connect.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};
export default connectDB;

import mongoose from "mongoose";

export function dataBaseConnection() {
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.DB_URI, params);
  } catch (error) {
  }
}
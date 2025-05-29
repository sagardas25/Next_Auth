import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log(process.env.MONGODB_URL);
    const connectionInst = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    console.log(
      "database connected... , host Name : " + connectionInst.connection.host
    );
  } catch (error) {
    console.log("database connection error - " + error);

    process.exit(1);
  }
};

export { connect };

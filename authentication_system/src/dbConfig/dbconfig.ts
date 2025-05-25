import mongoose from "mongoose";
import { hostname } from "os";

const connect = async () => {
  try {
    const connectionInst = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.B_NAME}`
    );

    console.log(
      "database connected. host Name : " + connectionInst.connection,
      hostname
    );
  } catch (error) {
    console.log("database connection error0" + error);

    process.exit(1);
  }
};

export { connect };

const mongoose = require("mongoose");

async function mongoDBConnect() {
  try {
    const connect = await mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.m1d2qau.mongodb.net/bookReview?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(
      "Connected on PORT: ",
      connect?.connection?.host,
      connect?.connection.name
    );
  } catch (error) {
    console.log("Error while connecting to mongodb", error?.message);
  }
}

module.exports = mongoDBConnect;

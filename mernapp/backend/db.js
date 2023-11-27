const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://gillsharandeep3108:ilovebabag22@cluster0.jmfpxvs.mongodb.net/foodexpressmern?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    console.log(fetched_data);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;

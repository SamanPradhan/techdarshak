const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
require("dotenv").config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Can't connect to DB");
  }
  console.log("Server is listening at ", PORT);
});

require("dotenv").config();
const axios = require("axios");
const express = require("express");
const db = require("./config/dbConfig");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// const { verifyUser } = require("./middlewares/verifyUser");

//Router
const authRouter = require("./routes/auth");
const customerRouter = require("./routes/customer");
const ticketRouter = require("./routes/ticket");

app.use("/auth", authRouter);
app.use("/customer", customerRouter);
app.use("/ticket", ticketRouter);
// app.use(verifyUser);

const startServer = async function () {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port : ${port}`);
    });
  } catch (error) {
    console.log("Error in starting the server .", error);
  }
};

startServer();

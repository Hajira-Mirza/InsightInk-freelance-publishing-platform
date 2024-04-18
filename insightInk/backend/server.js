require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const booksRouter = require("./routes/booksRouter");
const userDetailsRouter = require("./routes/userDetailsRouter");
const planRouter = require("./routes/planRouter");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/books", booksRouter);
app.use("/userDetails", userDetailsRouter);
app.use("/plan", planRouter);

const { db } = require("./models/index");
db.sequelize
  .sync({ alter: true, logging: false })
  .then(() => {
    server.listen(PORT);
    server.on("error", onError);
    server.on("listening", onListening);
  })
  .catch((error) => {
    console.log(error.message);
  });

//listen for requests
const PORT = process.env.PORT || 7000;
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

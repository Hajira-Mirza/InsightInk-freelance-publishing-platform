require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//import routes
const signInRouter = require("./routes/signInRouter")
const signUpRouter = require("./routes/signUpRouter")
const authRouter = require("./routes/authRouter")

const app = express();
//middlewares
app.use(express.json());
app.use(cors());
/*app.use(
  cors({
    origin: true,
    credentials: true,
  })
);*/

app.use(cookieParser());

app.use("/signIn", signInRouter);
app.use("/signUp", signUpRouter);
app.use("/auth", authRouter);

const { db } = require("./models/index");
db.sequelize
  .sync({ alter: true, logging: false })
  .then(() => {
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);
  })
  .catch((error) => {
    console.log(error.message);
  });

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("connected to db & listening on post", process.env.PORT);
});
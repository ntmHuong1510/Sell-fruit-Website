require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const login = require("./src/routes/login.route");
const auth = require("./src/middlewares/auth.middleware");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(morgan("tiny"));
app.use("/auth", login);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.get("/", auth, (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

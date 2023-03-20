const express = require("express")
const bodyParser = require("body-parser");
require("dotenv").config();

const db = require("./config/db.config");
const authRouter = require("./routes/auth.routes")

db.connectToMongoDB();
const PORT =  process.env.PORT
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);
app.get("/api/v1/", (req, res) => {
    res.send("Pella Yay!");
});
app.get("/", (req, res) => {
    res.send("Pella Yay!");
});


// Handle errors.
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message });
    next();
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});


module.exports = app
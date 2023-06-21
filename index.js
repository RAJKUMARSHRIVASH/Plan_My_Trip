const express = require("express");
require("dotenv").config();
const path = require("path");
const postRouter = require("./routes/postRoute");
const cors = require("cors");
const connection = require("./config/db");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/trip", postRouter);
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log(`server is running at the port ${process.env.port}`);
    } catch (error) {
        console.log("Something went wrong " + error);
    }
})

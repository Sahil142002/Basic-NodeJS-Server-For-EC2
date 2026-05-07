const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    console.log("Express App is running...");
    res.json({ status: "Express App is running!" });
});

app.get("/health", (req, res) => {4
    console.log("Health check hit");
    res.json({ status: "Express health is good..." });
});

app.get("/hello", (req, res) => {
    console.log("Hello endpoint hit");
    console.log(`IP : ${req.headers["x-forwarded-for"] || req.socket.remoteAddress}`);// what is the remote addreess ask and make the changes
    res.json({ message: "Hello from Express App!" });
});

app.listen(PORT, () => {
    console.log(`------- Server running on port ${PORT} ---------`);
});

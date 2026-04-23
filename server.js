const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is working");
});

app.get("/users", (req, res) => {
    res.json([{ id: 1, name: "Ciel" }]);
});

app.post("/users", (req, res) => {
    console.log(req.body); // helps us debug
    res.json({
        message: "User added",
        data: req.body
    });
});

app.listen(PORT, "0.0.0.0",() => {
    console.log(`Server running on http://localhost:${PORT}`);
});
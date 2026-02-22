const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Server running successfully🚀");
});

app.post("/ask", (req, res) => {
    const question = req.body.question;

    res.json({
        answer: "I am a passionate developer skilled in problem solving, teamwork and building real world applications."
    });
});

app.listen(3000, () => {
    console.log("✅ AI Server running on port 3000");
});
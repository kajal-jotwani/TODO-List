const todos = require("./routes/todos.js")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


require("dotenv").config();  // Load environment variables

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/todos", todos)

console.log(process.env.MONGO_URI);  // Check if MONGO_URI is correctly loaded

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to our TODO api");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



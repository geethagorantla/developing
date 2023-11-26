const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json());


var corsOptions = {
  origin: "http://localhost:8045"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }))


const db = require("./app/models")
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database!")
})
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
app.get("/", (req, res) => {
  res.json({ message: "Welcome to tasks applications" })
})

require("./app/routes/task.route")(app);
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();
require("dotenv").config();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  //response.sendFile("C:\\Users\\Tanvi\\Documents\\INTERNSHIP ITG\\backend\\hi.html")
});


app.use("/users", userRoutes);
try {
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("successfulyy connected");
    app.listen(process.env.PORT, () => {
      console.log("hosted");
    });
  });
} catch (error) {
  console.log(error);
}

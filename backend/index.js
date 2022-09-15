const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const connectMongoDB = require("./config/MongoDBConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on port ${port}...`));
connectMongoDB();

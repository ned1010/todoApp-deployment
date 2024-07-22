//also want to include socket io for real-time view

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//import routes
const todoRoute = require("./router/route");
const postRoute = require("./router/post");
const deleteRoute = require("./router/delete");
const updateRoute = require("./router/update");

//middleware
//if you don't use this middleware, the css does not work
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//EJS template
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/"));

//CORS middleware
app.use(cors("*"));
//set database here
//we added name of the database at the end of the string


mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => {
		console.log("Connected to the database");
		app.listen(port, function () {
			console.log(`Listening at port ${port}`);
		});
	})
	.catch((err) => console.log(err));

 //connect to database as well
app.use(todoRoute);
app.use(postRoute);

//delete request
app.use(deleteRoute);

//update request
app.use(updateRoute);

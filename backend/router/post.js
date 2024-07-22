const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const data = require("../model/model");


router.post("/", async (req, res) => {
	const { text } = req.body;
	console.log(text);
	try {
		const newTodo = {
			id: uuidv4(),
			text: text,
			completed: false,
		};
		console.log(newTodo);
		//add to the database
		const newItem = await data.create(newTodo);

		res.redirect("/");
		// res.status(200).send("Successfully added to the database");
	} catch (error) {
		console.log(`${error}`);
	}
});
module.exports = router;

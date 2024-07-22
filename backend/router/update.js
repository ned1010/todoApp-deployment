const express = require("express");
const router = express.Router();

const dataModel = require("../model/model");

router.put("/completed/:id", async (req, res) => {
	try {
		const todoId = req.params.id;
		console.log("got id to ", todoId);

		//get the completed status
		const currentStatus = await dataModel.findOne({ id: todoId });
		console.log(currentStatus.completed);
		const update = await dataModel.updateOne(
			{ id: todoId },
			{ $set: { completed: !currentStatus.completed } }
		);
		res.status(200).send("Update successful");
	} catch (error) {
		console.log(`Error updating to database ${error}`);
	}
});



module.exports = router;

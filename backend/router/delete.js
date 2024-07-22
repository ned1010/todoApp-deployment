const express = require("express");
const router = express.Router();

let dataModel = require("../model/model"); // Assuming data is an array of items with unique IDs

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		console.log("id from server", id);
		console.log("Server wants to delete element with id", id);

		const deletedItem = await dataModel.deleteOne({
			id: id,
		});

		console.log(deletedItem);

		res.status(200).send("Deleted successfully")
	} catch (error) {
		console.log(`${error}`);
	}
});

module.exports = router;

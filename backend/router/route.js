const express = require("express");
const router = express.Router();
const path = require("path");

const dataModel = require("../model/model");

router.get("/", async (req, res) => {
	try {
		const response = await dataModel.find({});
		// console.log(response);

		res.render("index", { items: response });
	} catch (error) {
		console.log(`${error}`);
	}
});

//filter active
router.get("/active", async (req, res) => {
	try {
		//filter to get only active task
		const activeTodos = await dataModel.find({ completed: false });
		console.log(activeTodos);

		res.status(200).render("index", { items: activeTodos });
	} catch (error) {
		conosole.log(`Error filtering active state ${error}`);
	}
});

//filter completed
router.get("/completed", async (req, res) => {
	//send completed task
	try {
		const completeTodos = await dataModel.find({ completed: true });
		console.log("completed todos", completeTodos);

		res.status(200).render("index", { items: completeTodos });
	} catch (error) {
		console.log(`Error in geting complegted task ${error}`);
	}
});

module.exports = router;

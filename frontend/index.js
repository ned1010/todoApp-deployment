/*
TOPICS TO COVER:
1. CORS 
2. MIDDLEWARES
3. DATABASE
4. WebSocket
*/

// alert("Hi")
document.addEventListener("DOMContentLoaded", function () {
	// Get the current path of the URL
	var path = window.location.pathname;

	// Select all nav links
	var navLinks = document.querySelectorAll(".nav-link");

	// Loop through each nav link and check if it matches the current path
	navLinks.forEach(function (link) {
		// Remove active class from all links
		link.classList.remove("active");

		// Add active class to the link whose href matches the current path
		if (link.getAttribute("href") === path) {
			link.classList.add("active");
		}
	});
});

//delete btn
async function deleteHandle(id) {
	console.log(id);

	const deleteUrl = `https://ejs-todo-app.vercel.app/${id}`;

	//makde a delete request to the server
	try {
		const response = await fetch(deleteUrl, {
			method: "DELETE",
		});
		if (response.ok) {
			console.log(response);
			console.log("Deleted successfully");
			window.location.reload();
		} else {
			console.log("Delete request failed:", response.status, response.statusText);
		}
	} catch (error) {
		console.log(`Error in making delete request ${error}`);
	}
}

async function checkHandle(id) {
	console.log("got clicked for complete", id);
	//when clicked, add a class to the item

	const checkUrl = `https://ejs-todo-app.vercel.app/completed/${id}`;

	//create an update request
	try {
		const response = await fetch(checkUrl, {
			method: "PUT",
		});
		if (response.ok) {
			//add a style if the task has been completed
			console.log("Update the to complete");
			window.location.reload();
		} else {
			console.log("Update request failed", response.status, response.statusText);
		}
	} catch (error) {
		console.log(`${error}`);
	}
}



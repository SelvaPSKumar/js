// main.js

// POST Request Using Fetch()
fetch("https://jsonplaceholder.typicode.com/posts", {

	//Adding Method
	method: "POST",

	//Adding Body Or Contents
	body: JSON.stringify({
		title: "foo",
		body: "bar",
		userId: 1
	}),

	// Adding Headers to the Request
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})

	.then(response => response.json())

	.then(json => console.log(json));


// GET Request Using Fetch()
fetch("https://jsonplaceholder.typicode.com/users")

	// Converting Received Data to JSON
	.then(response => response.json())
	.then(json => {

		// Create a Variable to Store HTML
		let li = `<tr><th>Name</th><th>Email</th><th>username</th></tr>`;

		// Loop through Data and add Table Row
		json.forEach(user => {
			li += `<tr>
				<td>${user.name} </td>
				<td>${user.email}</td>		
				<td>${user.username}</td>		
			</tr>`;
		});

		document.getElementById("users").innerHTML = li;
	});
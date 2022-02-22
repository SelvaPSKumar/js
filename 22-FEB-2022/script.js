const apiUrl = "https://jsonplaceholder.typicode.com/users";
const apiUrl1 = "https://jsonplaceholder.typicode.com/user";


//GET Method - then  and catch 
const prom = fetch(apiUrl, {
    method: "GET",
});

prom
    .then(function(response) {
        if (response.status === 200) return response.json();
        else console.log("Something Failed");
    })

    .then (function(data) {
        console.log(data);
        console.log(data[2]);
    });

    //Or
    fetch(apiUrl1)
        .then(function(response1) {
            if (response1.status === 200) return response1.json();
            else throw new Error ("Something Wrong");
        })

        .then(function (data1) {
            console.log(data1);
            console.log(data1[2]);
        })

        .catch(function (err){
            console.log(err.message);
        });

// GET Method - async and await (try and catch)
async function fetchData() {
    try {
        const response2 = await fetch(apiUrl);
        if (response2.status === 200) {
            const data2 = await response2.json();
            console.log(data2);
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

fetchData();

//Or
async function fetchData1() {
    try {
        const response3 = await fetch(apiUrl1);
        if (response3.status === 200) {
            const data3 = await response3.json();
            console.log(data3);
        } else throw new Error ("Something Wrong");
    }
    catch (err) {
        console.log(err.message);
    }
}
fetchData1();

// POST Method
async function fetchPost () {
    try {
        const response4 = await fetch(apiUrl);
        if (response4.status === 200) {
            const postAr = await response4.json();
            for (data4 of postAr) {
                createPost (data4);
            }
        } else throw new Error ("Failed to Post");

    }
    catch (err) {
        console.log (err.message);
    }
}

// PUT Method 
async function updatePost (newValue, postId, element) {
    const jsonString = JSON.stringify({id:postId, post:newValue});

    const reqObj = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body : jsonString
    };

    try {
        const response5 = await fetch(apiUrl, reqObj);
        if (response5.status === 200) {
            element.textContent = newValue;
        } else {
            throw new Error ("Failed to Update/Modify");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

// PATCH Method
async function updatePost1 (newValue1, postId1, element1) {
    const jsonString1 = JSON.stringify({id:postId1, post:newValue1});

    const reqObj3 = {
        method: "PATCH",
        headers: {
            'Content-Type' : 'application/json',
        },
        body : jsonString1
    };

    try {
        const response7 = await fetch(apiUrl, reqObj3);
        if (response7.status === 200) {
            element1.textContent = newValue1;
        } else {
            throw new Error ("Failed to Update/Modify");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

// DELETE Method
async function deletePost(element) {
    const deleteId = element.id;

    const reqObj2 = {method: "DELETE"};

    try {
        const response6 = await fetch (`${apiUrl}/${deleteId}`, reqObj2);
        if (response6.status === 200) {
            element.remove()
        } else {
            throw new Error ("Failed to Delete");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}
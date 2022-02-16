const apiUrl = "https://jsonplaceholder.typicode.com/users";
const apiUrl1 = "https://jsonplaceholder.typicode.com/user";


//GET Method then & Catch

const promise = fetch(apiUrl, {
    method: "GET",
});

promise
    .then(function (res) {
        if (res.status === 200) return res.json();
        else console.log("Something Failed");
    })

    .then(function (data) {
        console.log(data);
        console.log(data[1]);
    });

//Or GET

fetch(apiUrl1)
    .then(function (res1) {
        if (res1.status === 200) return res1.json();
        else throw new Error("Something failed..");
    })

    .then(function (data1) {
        console.log(data1);
        //console.log(data1[1]);
    })

    .catch(function (err) {
        console.log(err.message);
    });

//Async & await Using GET

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (response.status === 200) {
            const data2 = await response.json();
            console.log(data2);
        }
    }

    catch (err) {
        console.log(err.message);
    }
}

fetchData();

//Or Async & await Using GET

async function fetchData1() {
    try {
        const response1 = await fetch(apiUrl1);
        if (response1.status === 200) {
            const data3 = await response1.json();
            console.log(data3);
        } else throw new Error("Something error occured");
    }

    catch (err) {
        console.log(err.message);
    }
}

fetchData1();

//Or Async & await Using Get

async function fetchData2() {
    try {
        const response2 = await fetch(apiUrl1);
        if (response2.status !== 200) throw new Error("Not Ok"); {
            const datas = await response2.json();
            console.log(datas);
        }
    }

    catch (err) {
        console.log(err.message);
    }
}

fetchData2();

//Or 

async function fetchData3() {
    try {
        const res1 = await fetch(apiUrl);
        if (res1.status !== 200) throw new Error("Not Ok"); {
            const datass = await res1.json();
            console.log(datass);
        }
    }

    catch (err) {
        console.log(err.message);
    }
}

fetchData3();

//POST Method

async function fetchPost() {
    try {
        const res2 = await fetch(apiUrl);
        if (res2.status === 200) {
            const postArr = await res2.json();
            for (dat1 of postArr) {
                createPost(dat1);
            }
        } else {
            throw new Error("Failed to fetch posts!");
        }
    } catch (er1) {
        console.log(er1.message);
    }
}

//newPost Method

async function newPost() {
    const post = inputBox.value;

    const shouldCreate = post.replace(/[\s]/g, "").length > 3;
    if (!shouldCreate) return alert("Please Enter Some Value");

    const jsonString = JSON.stringify({ post });
    const reqObj = {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: jsonString
    };

    try {
        const res3 = await fetch(apiUrl, reqObj);

        if (res3.status === 200) {
            await res3.json();
            createPost(obj);
            inputBox.value = "";
            inputBox.focus();
        } else {
            throw new Error("Failed to create new post!");
        }
    } catch (er1) {
        console.log("er1.message");
    }
}

//PUT Method

async function updatePost(newValue, postId, element) {
    const jsonString = JSON.stringify({ id: postId, post: newValue });

    const reqObj1 = {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: jsonString
    };

    try {
        const resp = await fetch(apiUrl, reqObj1)
        if (resp.status === 200) {
            element.textContent = newValue;
        } else {
            throw new Error("Failed to Update the Post!");
        }
    } catch (er1) {
        console.log(er1.message);
    }
}

//Delete Method

async function deletePost(element) {
    const deleteId = element.id;

    const reqObj2 = { method: "DELETE" };
    try {
        const resp1 = await fetch(`${apiUrl}/${deleteId}`, reqObj2)
        if (resp1.status === 200) {
            element.remove()
        } else {
            throw new Error("Failed to Delete the Post!");
        }
    } catch (er1) {
        console.log(er1.message);
    }
}
// Targetting all classes & id from HTML

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});

// engine function which will do all the works

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};

// Login Auth

function fetchAuth() {
    // const ApiUrl = "https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin";
    // const credentials = {
    //     "email:admin@v3qard.com,password:radius123"};
    // fetch(ApiUrl, {
    //     method: "POST",
    //     headers: {
    //         "Authorization": `Basic ${credentials}`
    //     }
    // })
    //     .then((result) => {
    //         if (result.status != 200) { throw new Error("Bad Server Response"); }
    //         return result.text();
    //     })
    //     .then((response) => {
    //         document.getElementById("demoShow").innerHTML = response;
    //     })
    //     .catch((error) => { console.log(error); });
    const user = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }
    console.log('user : ', user)
    let options = {
        method: 'POST',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }

    let fetchRes = fetch(
        "https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin",
        options);
    fetchRes.then(res =>
        res.json()).then(response => {
            console.log('Response : ', response)
            if (response && response.apiStatus) {
                localStorage.setItem("token", response.token);
                document.getElementById("submit").onclick = function () {
                    location.href = "dash.html";
                }
            } else {
                alert(response.result)
                document.getElementById("email").value = ''
                document.getElementById("password").value = ''
            }
        })
};

// Password Eye Icon Function





// // const ApiUrl = "https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin";

// // async function fetchAuth() {
// //     const response = await fetch(ApiUrl, {
// //         method: 'POST',
// //         headers: new Headers({
// //             'Authorization': 'Basic ' + btoa(email + ":" + password),
// //             'Content-Type': 'application/json'
// //         }),
// //         body: JSON.stringify({
// //             "email": "admin@v3qard.com",
// //             "Password": "radius123"
// //         })
// //     });
// //     const posts = await response.json();
// }
  // Login Auth Function End
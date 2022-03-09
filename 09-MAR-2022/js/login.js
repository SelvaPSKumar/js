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
        document.getElementById("submit").onclick = function () {
            location.href = "dashboard.html";
        }
    }
};

// Login Auth

// var email = {"email":"admin@v3qard.com"};
// var password = {"password":"radius123"};
function fetchAuth() {
    // (A) URL & CREDENTIALS
    const ApiUrl = "https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin",
        credentials = btoa("email:password");

    // (B) FETCH WITH HTTP AUTH
    fetch(ApiUrl, {
        method: "POST",
        headers: {
            "Authorization": `Basic ${credentials}`
        }
    })
        // (C) SERVER RESPONSE
        .then((result) => {
            if (result.status != 200) { throw new Error("Bad Server Response"); }
            return result.text();
        })
        .then((response) => {
            document.getElementById("demoShow").innerHTML = response;
        })

        // (D) HANDLE ERRORS (OPTIONAL)
        .catch((error) => { console.log(error); });
};



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
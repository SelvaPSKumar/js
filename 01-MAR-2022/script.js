// Login Form Modal

// setTimeout(show_popup, 3000);
//         function show_popup() {
//             var popup = document.querySelector(".popup");
//             popup.style.display = "block";
//             $("html body").css("overflow", "hidden");
//         }

//         function close_popup() {
//             var popup = document.querySelector(".popup");
//             popup.style.display = "block";
//             $("html body").css("overflow", "hidden");
//         }

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load", function () {
    showPopup();
    // setTimeout(function () {
    //     loginPopup.classList.add("show");
    // }, 5000)
})
function showPopup() {
    const timeLimit = 3
    let i = 0;
    const timer = setInterval(function () {
        i++
        if (i == timeLimit) {
            clearInterval(timer);
            loginPopup.classList.add("show");
        }
        console.log(i)
    }, 1000);
}

close.addEventListener(".click", function () {
    loginPopup.classList.remove("show");
})

// $(function () {
//     $("#dialog").dialog({
//         title: "jQuery Dialog Popup",
//         buttons: {
//             Close: function () {
//                 $(this).dialog('close');
//             }
//         }
//     });
// });

// $(document).ready(function () {
//     const bclick = document.getElementById('clickme');
//     bclick.addEventListener('click', function load() {

//         var pop_login = document.querySelector('.popup_login');
//         var close = document.querySelector('.close_btn');

//         window.addEventListener("load", function () {
//             setTimeout(function () {
//                 pop_login.classList.add('anyname');
//             }, 5000)
//         })

//         close.addEventListener("click", function () {
//             pop_login.classList.remove('anyname');
//         })
//     });
// });




// Login Form Syntax Error
// const form = document.getElementById('form');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }

// function showSucces(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }

// function checkEmail(input) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(re.test(input.value.trim())) {
//         showSucces(input)
//     }else {
//         showError(input,'Email is not invalid');
//     }
// }

// function checkRequired(inputArr) {
//     inputArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input,`${getFieldName(input)} is required`)
//         }else {
//             showSucces(input);
//         }
//     });
// }

// function checkLength(input, min ,max) {
//     if(input.value.length < min) {
//         showError(input, `${getFieldName(input)} must be at least ${min} characters`);
//     }else if(input.value.length > max) {
//         showError(input, `${getFieldName(input)} must be les than ${max} characters`);
//     }else {
//         showSucces(input);
//     }
// }

// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// function checkPassword(input) {
//     if(input.value !=="") {
//         showError(input, 'Enter a Password');
//     }
// }

// form.addEventListener('submit',function(e) {
//     e.preventDefault();

//     checkRequired([email, password,]);
//     checkLength(password,6,25);
//     checkEmail(email);
// });

// Toggle Button Function
function tobarMenu() {
    let tobar = document.querySelector('.tobar');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    let employee = document.querySelector('.employees-table');
    let btnHead = document.querySelector('.btnHeading');

    tobar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    employee.classList.toggle('active');
    btnHead.classList.toggle('active');
}


// Heading Buttons

var clickcallback = function (i) {
    setTimeout(function () {
        let id = "button" + i;
        document.getElementById(id).click();
    }, 1000);   // one second
    if (i <= 3) {
        clickcallback(i + 1);
    }
};

// Fetch Api

const apiUrl = "https://jsonplaceholder.typicode.com/users";
const apiUrl1 = "https://jsonplaceholder.typicode.com/user";

// GET Method - async and await (try and catch)
// async function fetchData1() {
//     try {
//         const response3 = await fetch(apiUrl1);
//         if (response3.status === 200) {
//             const data3 = await response3.json();
//             console.log(data3);
//         } else throw new Error("Something Wrong");
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }
// fetchData1();

// POST Method
// async function fetchPost() {
//     try {
//         const response4 = await fetch(apiUrl);
//         if (response4.status === 200) {
//             const postAr = await response4.json();
//             for (data4 of postAr) {
//                 createPost(data4);
//             }
//         } else throw new Error("Failed to Post");

//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }

// PUT Method
// async function updatePost(newValue, postId, element) {
//     const jsonString = JSON.stringify({ id: postId, post: newValue });

//     const reqObj = {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: jsonString
//     };

//     try {
//         const response5 = await fetch(apiUrl, reqObj);
//         if (response5.status === 200) {
//             element.textContent = newValue;
//         } else {
//             throw new Error("Failed to Update/Modify");
//         }
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }

// DELETE Method
// async function deletePost(element) {
//     const deleteId = element.id;

//     const reqObj2 = { method: "DELETE" };

//     try {
//         const response6 = await fetch(`${apiUrl}/${deleteId}`, reqObj2);
//         if (response6.status === 200) {
//             element.remove()
//         } else {
//             throw new Error("Failed to Delete");
//         }
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }
// Login Form Validation

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}

function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPassword(input) {
    if(input.value !=="") {
        showError(input, 'Enter a Password');
    }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([email, password,]);
    checkLength(password,6,25);
    checkEmail(email);
});

// Login Auth

function fetchAuth() {
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
                location.href = "dash.html";
            } else {
                alert(response.result)
                document.getElementById("email").value = ''
                document.getElementById("password").value = ''
            }
        })
};
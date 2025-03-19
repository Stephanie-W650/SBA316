const cardBody = document.getElementById('card')
const heading2 = document.createElement('h2')
heading2.innerHTML = "Register today to access more beautiful travel photos!";
cardBody.appendChild(heading2)

//https://www.w3schools.com/jsref/event_onclick.asp
function myFunction() {
document.getElementById('demo').style.backgroundColor = 'yellow'
window.open('https://en.wikipedia.org/wiki/Travel_photography', '_blank')

}
const button2 = document.getElementById('demo2')
button2.addEventListener('click', moreInfor)

function moreInfor(event) {
    const information = document.getElementById('information')
    information.innerHTML = "<b>Register now!</b>" 
    information.style.color = 'red'
}

const form1 = document.getElementById('form1');
const username = form1.elements['username']
const email = form1.elements['email']
const password = form1.elements['password']
const checkPassword = form1.elements['checkPassword']

form1.addEventListener("submit", validate)

function validate(event) {
    const nameVal = valudateUserName();
    if (nameVal === false) {
        event.preventDefault();
        return false;
    }

    const passwordVal = validatePassword()
    if (passwordVal === false) {
        event.preventDefault();
        return false;
    }

    const checkPasswordVal = passwordVal;
    if (checkPasswordVal === false) {
        event.preventDefault();
        return false;
    }

    form1.reset()
    alert("successful submission")

    return true;
}

function valudateUserName() {
    if (username.value === "") {
        alert("Please provide a username")
        username.focus()
        return false;
    }
    if (username.length < 4) {
        alert("The username must be at least four characters long.")
        username.focus();
        return false;
    }

    const pattern = /^\S+\w{4,8}\S{1,}/;
    if (!pattern.test(username.value)) {
        alert("The username cannot contain any special characters or whitespace.")
        username.focus();
        return false;
    }

    const uniqueChar = new Set(username.value)
    if (uniqueChar.size < 2) {
        alert("The username must contain at least two unique characters.")
        username.focus();
        return false;
    }
    return username.value;

}

function validatePassword() {
    if (password.value === "") {
        alert('Please provide a password')
        password.focus();
        return false;
    }
    if (password.value.length < 12) {
        alert("Passwords must be at least 12 characters long.")
        password.focus()
        return false;
    }
    const regex = /(?=.*[A-Z])^(?=.*[a-z])/
    if (!regex.test(password)) {
        alert("Passwords must have at least one uppercase and one lowercase letter.")
        password.focus()
        return false;
    }
    const regex2 = /(?=.*\d)/
    if (!regex2.test(password)) {
        alert("Passwords must contain at least one number.")
        password.focus()
        return false;
    }

    const regex3 = /(?=.*[@$!%*?&])/
    if (!regex3.test(password)) {
        alert("Passwords must contain at least one special character.")
        password.focus()
        return false;
    }
    if (password.value.includes(username.value)) {
        alert("Passwords cannot contain the username.")
        password.focus()
        return false;
    }


    if (password.value !== passwordCheck.value) {
        alert("Both passwords must match")
        password.focus()
        return false;
    }
    return password.value;
}

const form2 = document.getElementById('form2')
const username2 = form2.elements['username']
const password2 = username2.nextElementSibling
const keepLogin = form2.KeepSignin.elements['keep']

form2.addEventListener('submit', validate2);

function validate2(event) {
    const username2Val = validateUsername2()
    if (username2Val === false) {
        event.preventDefault();
        return false
    }

    const password2Val = validPassword2()
    if (password2Val === false) {
        event.preventDefault();
        return false
    }
    validKeepLogin();
    form2.reset();
    alert("Login Successful")

    return true;
}

function validateUsername2() {


    if (username2.value === "") {
        alert("The username cannot be blank.")
        username2.focus();
        return false;
    }
    return username2.value;
}
function validPassword2() {

    if (password2.value === "") {
        alert("The password cannot be blank.")
        password2.focus();
        return false;
    }


    return password2.value;;

}


function validKeepLogin() {

    if (keepLogin.checked) {
        alert("Keep me logged in is checked.")

    }

    return true;
}

//------------------------------------

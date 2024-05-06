// Function to handle registration
function register() {
    var username = document.getElementById("regUsername").value;
    var password = document.getElementById("regPassword").value;
    // Check if the username is already taken
    if(localStorage.getItem(username)) {
        alert("Username already taken!");
    } else {
        // Store the username and password in local storage
        localStorage.setItem(username, password);
        alert("Registration successful!");
    }
}

// Function to handle login
function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    // Check if the username exists in local storage
    if(localStorage.getItem(username) === password) {
        alert("Login successful!");
        window.location.href = 'Homepage.html';
    } else {
        alert("Invalid username or password!");
    }
}
// Check if user is logged in
function isLoggedIn() {
    return sessionStorage.getItem("loggedIn") === "true";
}

// Login function - checks username and password
function handleLogin() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var errorMsg = document.getElementById("loginError");

    if (username === "admin" && password === "1234") {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("username", username);
        window.location.href = "booking.html";
    } else {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Wrong username or password. Try: admin / 1234";
    }
}

// Logout function - clears session and goes back to login page
function handleLogout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

// Protect page - if not logged in, show notice and redirect to login
function protectPage() {
    if (!isLoggedIn()) {
        // Save a flag so index.html can show the "Login Required" notice
        sessionStorage.setItem("loginRequired", "true");
        window.location.href = "index.html";
    }
}

// Show the logged-in username in the navbar
function showUsername() {
    var user = sessionStorage.getItem("username");
    var el = document.getElementById("navUser");
    if (el && user) {
        el.textContent = "Hello, " + user;
    }
}

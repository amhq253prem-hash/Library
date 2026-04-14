document.addEventListener("DOMContentLoaded", function () {

    // If already logged in, go straight to booking page
    if (isLoggedIn()) {
        window.location.href = "booking.html";
        return;
    }

    // Show "Login Required" notice if user tried to access a protected page
    if (sessionStorage.getItem("loginRequired") === "true") {
        var notice = document.getElementById("loginNotice");
        if (notice) {
            notice.style.display = "block";
        }
        // Clear the flag after showing
        sessionStorage.removeItem("loginRequired");
    }

    // Wire the login button
    var loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            handleLogin();
        });
    }

    // Allow pressing Enter key to submit login
    document.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            handleLogin();
        }
    });

});

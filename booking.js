
document.addEventListener("DOMContentLoaded", function () {

    // Check login - redirect if not logged in
    protectPage();

    // Show username in navbar
    showUsername();

    // Wire the logout button
    var logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            handleLogout();
        });
    }

    // Wire the booking form submit
    var form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            handleBooking();
        });
    }

});

// Handle booking form submission
function handleBooking() {
    var name  = document.getElementById("studentName").value.trim();
    var email = document.getElementById("studentEmail").value.trim();
    var date  = document.getElementById("bookingDate").value;
    var book  = document.getElementById("bookSelect").value;

    var successMsg = document.getElementById("successMsg");
    var errorMsg   = document.getElementById("errorMsg");

    // Hide both messages first
    successMsg.style.display = "none";
    errorMsg.style.display   = "none";

    // Check all fields are filled
    if (name === "" || email === "" || date === "" || book === "") {
        errorMsg.style.display  = "block";
        errorMsg.textContent    = "Please fill in all fields before clicking Reserve.";
        return;
    }

    // Show booking success details
    successMsg.style.display = "block";
    successMsg.innerHTML =
        "<strong>✅ Booking Successful!</strong><br><br>" +
        "Name: <strong>" + name  + "</strong><br>" +
        "Email: <strong>" + email + "</strong><br>" +
        "Date: <strong>"  + date  + "</strong><br>" +
        "Book: <strong>"  + book  + "</strong>";

    // Reset form fields
    document.getElementById("bookingForm").reset();
}

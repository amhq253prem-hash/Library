
$(document).on("pageinit", "#bookPage", function () {

    // Check login - redirect to home if not logged in
    if (sessionStorage.getItem("loggedIn") !== "true") {
        sessionStorage.setItem("loginRequired", "true");
        window.location.href = "index.html";
    }

});

// Select the password field and the eye icons
const passwordField = document.getElementById('password');
const showEye = document.getElementById('showEye');
const hideEye = document.getElementById('hideEye');
const loginButton = document.querySelector('button[type="submit"]');
const loginForm = document.querySelector('form');
// Show password function
showEye.addEventListener('click', function () {
    passwordField.type = 'text'; // Change type to text to show password
    showEye.style.display = 'none'; // Hide the 'show' eye
    hideEye.style.display = 'block'; // Show the 'hide' eye
});

// Hide password function
hideEye.addEventListener('click', function () {
    passwordField.type = 'password'; // Change type back to password to hide
    hideEye.style.display = 'none'; // Hide the 'hide' eye
    showEye.style.display = 'block'; // Show the 'show' eye again
});

// Handle login button click
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    Swal.fire({
        title: "My Phone Shop",
        text: "Welcome and enjoy!",
        imageUrl: "../images/log_shop.png", // Correct relative path to the image
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    }).then((result) => {
        if (result.isConfirmed) {
            // Create a hidden link element
            const link = document.createElement('a');
            link.href = "/Homescreen/homescreen.html"; // Replace this with your SignUp.html path
            link.click(); // Programmatically click the link
        }
    });
});
// Example of a basic login validation (for demonstration purposes)

document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for demo purposes

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "saurabhgupta4224@gmail.com" && password === "2004") {
        alert('Login successful!');
        window.location.href = "home.html"; // Redirect to a dashboard or homepage
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin@user.com' && password === '1234') {
            
            window.location.href = 'tripsAndBookings.html';
        } else if (username === 'user@user.com' && password === '1234') {
            
            window.location.href = 'myBookings.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});

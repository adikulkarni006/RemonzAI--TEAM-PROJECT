console.log("✅ JS connected");

// SIGNUP
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Basic validation
        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }

    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
    });
}

// LOGIN
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && username === savedUser.username && password === savedUser.password) {
        localStorage.setItem('loggedIn', 'true');
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }
    });
}

// LOGOUT FUNCTION (use this in nav)
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = "login.html";
}

// PROTECT main.html
if (window.location.pathname.includes('index.html') && localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = "login.html";
}

// Add this new function to handle navigation
function navigateToSignup() {
    window.location.href = "signup.html";
}
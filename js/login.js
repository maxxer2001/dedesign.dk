window.onload = function() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    var storedPassword = localStorage.getItem('password');

    if (!isLoggedIn || !storedPassword) {
        // User is not logged in or password is not set, show login form
        showLoginForm();
    } else {
        // Password is set, prompt for login only if not already logged in
        if (!isLoggedIn) {
            showLoginForm();
        }
    }

    function showLoginForm() {
        // Hide header, main, and footer
        var header = document.querySelector('header');
        var main = document.querySelector('main');
        var footer = document.querySelector('footer');

        header.style.display = 'none';
        main.style.display = 'none';
        footer.style.display = 'none';

        // Create and display login container
        var loginContainer = document.createElement('div');
        loginContainer.classList.add('login-container');

        loginContainer.style.position = 'fixed';
        loginContainer.style.top = '50%';
        loginContainer.style.left = '50%';
        loginContainer.style.transform = 'translate(-50%, -50%)';
        loginContainer.style.textAlign = 'center';
        loginContainer.style.padding = '20px';
        loginContainer.style.borderRadius = '8px';
        loginContainer.style.backgroundColor = '#ffffff';
        loginContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

        var heading = document.createElement('h1');
        heading.textContent = 'Login';
        heading.style.marginTop = '0';

        var passwordInput = document.createElement('input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', 'Enter your password');
        passwordInput.style.width = '100%';
        passwordInput.style.padding = '10px';
        passwordInput.style.margin = '10px 0';
        passwordInput.style.border = '1px solid #ccc';
        passwordInput.style.borderRadius = '4px';
        passwordInput.style.boxSizing = 'border-box';

        var loginButton = document.createElement('button');
        loginButton.textContent = 'Login';
        loginButton.style.padding = '10px 20px';
        loginButton.style.backgroundColor = '#007bff';
        loginButton.style.color = '#ffffff';
        loginButton.style.border = 'none';
        loginButton.style.borderRadius = '4px';
        loginButton.style.cursor = 'pointer';
        loginButton.style.transition = 'background-color 0.3s ease';

        loginButton.onclick = function() {
            var enteredPassword = passwordInput.value.trim();
            var hashedEnteredPassword = hashPassword(enteredPassword);
            var correctPassword = localStorage.getItem('password');

            if (hashedEnteredPassword === correctPassword) {
                // Store login status
                localStorage.setItem('isLoggedIn', 'true');

                // Show header, main, and footer
                header.style.display = 'flex';
                main.style.display = 'block';
                footer.style.display = 'block';

                // Remove login container
                document.body.removeChild(loginContainer);
            } else {
                alert("Incorrect password. Please try again.");
            }
        };

        loginContainer.appendChild(heading);
        loginContainer.appendChild(passwordInput);
        loginContainer.appendChild(loginButton);

        document.body.appendChild(loginContainer);
    }

    function hashPassword(password) {
        // Implement your password hashing algorithm here
        // For demonstration, you can use a simple hashing function
        // This is not secure for production use, consider using a proper hashing library
        var hash = 0;
        if (password.length == 0) {
            return hash;
        }
        for (var i = 0; i < password.length; i++) {
            var char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash.toString();
    }

    // Function to change the password directly in JavaScript code
    function changePassword(newPassword) {
        // Hash the new password
        var hashedNewPassword = hashPassword(newPassword);
        // Store the new hashed password in localStorage
        localStorage.setItem('password', hashedNewPassword);
    }

    // Example usage of changePassword function
    changePassword('Minomino2');
};

function logout() {
    // Clear the stored login status from localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirect or perform any other action after logout if needed
    // For example:
    // window.location.href = 'login.html';
}

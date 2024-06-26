window.onload = function() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    var storedPassword = localStorage.getItem('password');

    if (!isLoggedIn || !storedPassword) {
        showLoginForm();
    } else {
        if (!isLoggedIn) {
            showLoginForm();
        }
    }

    function showLoginForm() {
        var header = document.querySelector('header');
        var main = document.querySelector('main');
        var footer = document.querySelector('footer');

        header.style.display = 'none';
        main.style.display = 'none';
        footer.style.display = 'none';

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
                localStorage.setItem('isLoggedIn', 'true');

                header.style.display = 'flex';
                main.style.display = 'block';
                footer.style.display = 'block';

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
        var hash = 0;
        if (password.length == 0) {
            return hash;
        }
        for (var i = 0; i < password.length; i++) {
            var char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; 
        }
        return hash.toString();
    }

    function changePassword(newPassword) {
        var hashedNewPassword = hashPassword(newPassword);
        localStorage.setItem('password', hashedNewPassword);
    }

    changePassword('kea');
};

function logout() {
    localStorage.removeItem('isLoggedIn');
}

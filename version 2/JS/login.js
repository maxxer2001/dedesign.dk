// const style = document.createElement('style');
// style.innerHTML = `
//   .login-container {
//     width: 300px;
//     margin: 100px auto;
//     padding: 20px;
//     border: 1px solid #ccc;
//     box-shadow: 2px 2px 12px #aaa;
//     text-align: center;
//     background: white;
//     z-index: 1000;
//     position: fixed;
//     top: 40%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
//   .login-container h2 {
//     margin-bottom: 20px;
//   }
//   .login-container label, .login-container input, .login-container button {
//     display: block;
//     width: 100%;
//     margin-bottom: 10px;
//   }
//   .login-container button {
//     padding: 10px;
//     background-color: #007BFF;
//     color: white;
//     border: none;
//     cursor: pointer;
//   }
//   .login-container button:hover {
//     background-color: #0056b3;
//   }
//   .error-message {
//     color: red;
//     margin-top: 10px;
//   }
//   .hidden {
//     display: none;
//   }
//   body {
//     background-color: #f0f0f0;
//   }
// `;
// document.head.appendChild(style);

// const loginContainer = document.createElement('div');
// loginContainer.className = 'login-container';
// loginContainer.innerHTML = `
//   <h2>Login</h2>
//   <form id="login-form">
//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password" required>
//     <button type="submit">Login</button>
//   </form>
//   <div id="error-message" class="error-message"></div>
// `;
// document.body.appendChild(loginContainer);

// const contentElements = document.body.querySelectorAll('body > *:not(.login-container)');
// contentElements.forEach(el => {
//   el.classList.add('hidden');
// });

// function loginHandler(event) {
//   event.preventDefault();
//   const password = document.getElementById('password').value;
//   const correctPassword = 'massimo';
//   if (password === correctPassword) {
//     loginContainer.remove();
//     document.head.removeChild(style);
//     document.getElementById('login-form').removeEventListener('submit', loginHandler);
//     contentElements.forEach(el => {
//       el.classList.remove('hidden');
//     });
//   } else {
//     document.getElementById('error-message').textContent = 'Incorrect password. Please try again.';
//   }
// }

// document.getElementById('login-form').addEventListener('submit', loginHandler);

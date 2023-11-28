// Functions
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Get values from login form
  const username = document.getElementById('username-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  //check to make sure input was entered
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      //TODO show modal here instead
      // alert(response.statusText);
    }
  }
};

//Sign Me Up
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

  if (username && password) {
    const response = await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      //TODO show modal here instead
      // alert(response.statusText);
    }
  }
};

// Event Listeners
document
  .getElementById('login-form')
  .addEventListener('submit', loginFormHandler);

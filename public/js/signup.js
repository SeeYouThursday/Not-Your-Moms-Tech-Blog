
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
      alert(response.statusText);
      console.log(response);
    }
  }
};

// Event Listeners
document
  .getElementById('signup-form')
  .addEventListener('submit', signupFormHandler);

const responseCheck = (response, method) => {
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(`Failed to ${method} post`);
  }
};

const postSubmitHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#newTitle').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch('api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

//EventHandlers
document
  .getElementById('createPost')
  .addEventListener('submit', postSubmitHandler);

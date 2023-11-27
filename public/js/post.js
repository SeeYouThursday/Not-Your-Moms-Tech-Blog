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
      console.log('GREAT SUCCESS');
    } else {
      console.log(await response.json(), 'HELLO THEREEEEEEEEE');
      //TODO show modal here instead
      // alert(response.statusText);
    }
  }
};

//EventHandlers
document
  .getElementById('createPost')
  .addEventListener('submit', postSubmitHandler);

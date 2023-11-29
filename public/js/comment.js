commentHandler = async (event) => {
  event.preventDefault();
  const comment = document.querySelector('#newComment').value.trim();

  if(comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
        document.location.reload();
    }
};

//Event Listeners
document
  .getElementById('addComment')
  .addEventListener('submit', commentHandler);

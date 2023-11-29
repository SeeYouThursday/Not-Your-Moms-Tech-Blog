commentHandler = async (event) => {
  event.preventDefault();
  try {
    const content = document.querySelector('#newComment').value.trim();

    const id = window.location.pathname.split('/');
    console.log(id);

    const post_id = parseInt(id[id.length - 1]);

    if (content && post_id) {
      const response = await fetch(
        `${window.location.origin}/api/posts/comments/`,
        {
          method: 'POST',
          body: JSON.stringify({ content, post_id }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        document.location.reload();
      }
    }
  } catch (error) {
    console.error(error);
  }
};

//Event Listeners
document
  .getElementById('addComment')
  .addEventListener('submit', commentHandler);

// const responseCheck = require('../../utils/response_check');

const postUpdateHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.getElementById('newTitle').value.trim();
    const postContent = document.getElementById('post-content').value.trim();
    const body = JSON.stringify({
      title: title,
      content: postContent,
    });

    console.log(id, title, postContent);
    console.log('Updating post...'); // Added console.log statement for debugging
    try {
      const response = await fetch(
        `${window.location.origin}/api/posts/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        }
      );

      console.log('Post update response:', response); // Added console.log statement for debugging
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(`Failed to update post`);
      }
    } catch (error) {
      console.error('Error updating post:', error); // Added console.error statement for debugging
    }
  }
};

//Event Listeners

document
  .getElementById('update-post')
  .addEventListener('click', async (event) => {
    await postUpdateHandler(event);
  });

// else {
//   console.log('something went wrong');
// }

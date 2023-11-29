const responseCheck = (response, method) => {
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(`Failed to ${method} post`);
  }
};

const getPostInfo = async () => {
  const response = await fetch('api/posts', {
    method: 'GET',
    // body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });
};

const postUpdateHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.getElementById('newTitle');
    const postContent = document.getElementById('post-content');
    const response = await fetch(`api/posts/${id}`, {
      method: 'PUT',
      body: {
        title: title,
        content: postContent,
      },
    });
    responseCheck(response, 'update');
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    responseCheck(response, 'delete');
  }
};

// Event Listeners
document.querySelector('.delete').addEventListener('click', delButtonHandler);

const responseCheck = (response, method) => {
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(`Failed to ${method} post`);
  }
};

module.exports = responseCheck;

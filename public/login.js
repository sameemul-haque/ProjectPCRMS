// Get the login form and error message element
const loginForm = document.querySelector('form');
const errorMsg = document.getElementById('error-msg');

// Add event listener to the login form
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the email and password input fields
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  // Use Firebase authentication to sign in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Clear the form and error message
      loginForm.reset();
      errorMsg.innerText = '';

      // Redirect the user to the home page or dashboard
      // Replace the URL with the URL of your home page or dashboard
      window.location.href = 'home.html';
    })
    .catch((error) => {
      // Handle errors by displaying an error message to the user
      errorMsg.innerText = error.message;
    });
});

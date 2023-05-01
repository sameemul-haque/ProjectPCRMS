// Get elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const createUserBtn = document.getElementById('create-user-btn');
const errorMsg = document.getElementById('error-msg');

// Add create user event
createUserBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get user inputs
  const email = emailInput.value;
  const password = passwordInput.value;

  // Create user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      // User created successfully
      console.log('User created successfully!');
      errorMsg.innerHTML = '';
      emailInput.value = '';
      passwordInput.value = '';
    })
    .catch((error) => {
      // Error creating user
      console.error('Error creating user:', error);
      errorMsg.innerHTML = error.message;
    });
});

const loginForm = document.querySelector('form');
const errorMsg = document.getElementById('error-msg');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      loginForm.reset();
      errorMsg.innerText = '';
      window.location.href = '/pcrms';
    })
    .catch((error) => {
      errorMsg.innerText = error.message;
    });
});

// let keysPressed = '';
// document.body.addEventListener('keydown', function(event) {
//   keysPressed += event.key.toLowerCase(); 
//   if (keysPressed === 'help') {
//     window.location.href = "https://github.com/sameemul-haque/projectpcrms";
//   } else if (!'help'.startsWith(keysPressed)) {
//     keysPressed = '';
//   }
// });

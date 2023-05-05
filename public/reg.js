const auth = firebase.auth();
const firestore = firebase.firestore();

const registerBtn = document.getElementById('register-btn');
const messageDiv = document.getElementById('message');

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Send email verification
        userCredential.user.sendEmailVerification()
        .then(() => {
            // Email sent.
            messageDiv.innerHTML = 'A verification email has been sent to your email address. Please check your email and click on the verification link to verify your email address.';
            messageDiv.style.color = 'green';
        })
        .catch((error) => {
            console.error(error);
            messageDiv.innerHTML = error.message;
            messageDiv.style.color = 'red';
        });
    })
    .catch((error) => {
        console.error(error);
        messageDiv.innerHTML = error.message;
        messageDiv.style.color = 'red';
    });
});


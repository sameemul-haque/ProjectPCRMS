const logoutBtn = document.getElementById('logout-btn');

// Add event listener to the logout button
logoutBtn.addEventListener('click', () => {
    // Use Firebase authentication to sign out the user
    firebase.auth().signOut()
    .then(() => {
        // Redirect the user to the login page
        // Replace the URL with the URL of your login page
        window.location.href = 'login.html';
    })
    .catch((error) => {
        // Handle errors by displaying an error message to the user
        console.log(error.message);
    });
});

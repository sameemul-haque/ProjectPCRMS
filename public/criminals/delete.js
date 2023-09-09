const db = firebase.firestore();

const deleteForm = document.getElementById("delete-form");

deleteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the criminalID to delete
    const criminalID = deleteForm.criminalID.value.toString();
    // Delete the record from Firestore database
    db.collection("records")
        .where("criminalID", "==", criminalID)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // Delete the document
                db.collection("records")
                    .doc(doc.id)
                    .delete()
                    .then(() => {
                        console.log("Document successfully deleted");
                        alert("Criminal details deleted successfully!");
                        deleteForm.reset();
                        window.location.href = "/criminals";
                    })
                    .catch((error) => {
                        console.error("Error deleting document: ", error);
                        alert("Error deleting criminal details, please try again.");
                    });
            });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
            alert("Error getting criminal details, please try again.");
        });
});

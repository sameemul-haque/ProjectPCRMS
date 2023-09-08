const db = firebase.firestore();

const deleteForm = document.getElementById("delete-form");

deleteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the policeID to delete
    const policeID = deleteForm.policeID.value.toString();
    // Delete the record from Firestore database
    db.collection("police")
        .where("policeID", "==", policeID)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // Delete the document
                db.collection("police")
                    .doc(doc.id)
                    .delete()
                    .then(() => {
                        console.log("Document successfully deleted");
                        alert("Police details deleted successfully!");
                        deleteForm.reset();
                    })
                    .catch((error) => {
                        console.error("Error deleting document: ", error);
                        alert("Error deleting police details, please try again.");
                    });
            });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
            alert("Error getting police details, please try again.");
        });
});

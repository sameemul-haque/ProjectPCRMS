const db = firebase.firestore();

const addDetailsForm = document.getElementById("add-details-form");

addDetailsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values
  const policeID = addDetailsForm.policeID.value;
  const policeName = addDetailsForm.policeName.value;
  const policeStation = addDetailsForm.policeStation.value;
  const policeRank = addDetailsForm.policeRank.value;
  const policeContact = addDetailsForm.policeContact.value;

  // Add record to Firestore database
  db.collection("police")
    .add({
      policeID: policeID,
      policeName: policeName,
      policeStation: policeStation,
      policeRank: policeRank,
      policeContact: policeContact,
    })
    .then((docRef) => {
      console.log("Details added with ID: ", docRef.id);
      // Reset form
      addDetailsForm.reset();
      alert("Details added successfully!");
      window.location.href = "/police";
    })
    .catch((error) => {
      console.error("Error adding details: ", error);
      alert("Error adding details, please try again.");
    });
});

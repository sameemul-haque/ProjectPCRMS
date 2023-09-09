// Get a reference to the database service
const db = firebase.firestore();

const addRecordForm = document.getElementById("add-record-form");

addRecordForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input values
  const criminalID = addRecordForm.criminalID.value;
  const criminalName = addRecordForm.criminalName.value;
  const crimeCategory = addRecordForm.crimeCategory.value;
  const crimeDate = addRecordForm.crimeDate.value;
  const crimeTime = addRecordForm.crimeTime.value;
  const crimeLocation = addRecordForm.crimeLocation.value;
  const crimeDescription = addRecordForm.crimeDescription.value;

  // Add record to Firestore database
  db.collection("records")
    .add({
      criminalID: criminalID,
      criminalName: criminalName,
      crimeCategory: crimeCategory,
      crimeDate: crimeDate,
      crimeTime: crimeTime,
      crimeLocation: crimeLocation,
      crimeDescription: crimeDescription,
    })
    .then((docRef) => {
      console.log("Record added with ID: ", docRef.id);
      // Reset form
      addRecordForm.reset();
      alert("Record added successfully!");
      window.location.href = "/criminals";
    })
    .catch((error) => {
      console.error("Error adding record: ", error);
      alert("Error adding record, please try again.");
    });
});

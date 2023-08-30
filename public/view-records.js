// Get a reference to the database service
const db = firebase.firestore();

const recordList = document.getElementById("record-list");

// Create a function to render records
function renderRecord(doc) {
  let tr = document.createElement("tr");
  let criminalNameTd = document.createElement("td");
  let crimeCategoryTd = document.createElement("td");
  let crimeDateTd = document.createElement("td");
  let crimeTimeTd = document.createElement("td");
  let crimeLocationTd = document.createElement("td");
  let criminalNationalityTd = document.createElement("td");
  let crimeDescriptionTd = document.createElement("td");

  criminalNameTd.textContent = doc.data().criminalName;
  crimeCategoryTd.textContent = doc.data().crimeCategory;
  crimeDateTd.textContent = doc.data().crimeDate;
  crimeTimeTd.textContent = doc.data().crimeTime;
  crimeLocationTd.textContent = doc.data().crimeLocation;
  criminalNationalityTd.textContent = doc.data().criminalNationality;
  crimeDescriptionTd.textContent = doc.data().crimeDescription;

  tr.appendChild(criminalNameTd);
  tr.appendChild(crimeCategoryTd);
  tr.appendChild(crimeDateTd);
  tr.appendChild(crimeTimeTd);
  tr.appendChild(crimeLocationTd);
  tr.appendChild(criminalNationalityTd);
  tr.appendChild(crimeDescriptionTd);

  recordList.appendChild(tr);
}

// Get records from Firestore database
db.collection("records")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Render each record
      renderRecord(doc);
    });
  })
  .catch((error) => {
    console.error("Error getting records: ", error);
    alert("Error getting records, please try again.");
  });
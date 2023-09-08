const db = firebase.firestore();

const detailsList = document.getElementById("details-list");

// Create a function to render detailss
function renderDetails(doc) {
  let tr = document.createElement("tr");
  let policeIDTd = document.createElement("td");
  let policeNameTd = document.createElement("td");
  let policeStationTd = document.createElement("td");
  let policeRankTd = document.createElement("td");
  let policeContactTd = document.createElement("td");

  policeIDTd.textContent = doc.data().policeID;
  policeNameTd.textContent = doc.data().policeName;
  policeStationTd.textContent = doc.data().policeStation;
  policeRankTd.textContent = doc.data().policeRank;
  policeContactTd.textContent = doc.data().policeContact;


  tr.appendChild(policeIDTd);
  tr.appendChild(policeNameTd);
  tr.appendChild(policeStationTd);
  tr.appendChild(policeRankTd);
  tr.appendChild(policeContactTd);

  detailsList.appendChild(tr);
}

// Get detailss from Firestore database
db.collection("police")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Render each details
      renderDetails(doc);
    });
  })
  .catch((error) => {
    console.error("Error getting details: ", error);
    alert("Error getting details, please try again.");
  });
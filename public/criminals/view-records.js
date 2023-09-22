const db = firebase.firestore();

const detailsList = document.getElementById("details-list");

function renderCard(doc) {
  const card = document.createElement("div");
  card.classList.add("card");

  const criminalID =  doc.data().criminalID;
  const criminalName = doc.data().criminalName;
  const crimeCategory =  doc.data().crimeCategory;
  const crimeDate =doc.data().crimeDate;
  const crimeTime =doc.data().crimeTime;
  const crimeLocation =  doc.data().crimeLocation;
  const crimeDescription =  doc.data().crimeDescription;

  card.innerHTML = `
    <p><b>Criminal ID:</b> ${criminalID}</p>
    <p><b>Criminal Name:</b> ${criminalName}</p>
    <p><b>Crime Committed:</b> ${crimeCategory}</p>
    <p><b>Date:</b> ${crimeDate}</p>
    <p><b>Time:</b> ${crimeTime}</p>
    <p><b>Location:</b> ${crimeLocation}</p>
    <p><b>Description:</b> ${crimeDescription}</p>
  `;

  detailsList.appendChild(card);
}

// Get records from Firestore database
db.collection("records")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      renderCard(doc);
    });
  })
  .catch((error) => {
    console.error("Error getting records: ", error);
    alert("Error getting records, please try again.");
  });
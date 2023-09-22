const db = firebase.firestore();

const detailsList = document.getElementById("details-list");

function renderCard(doc) {
  const card = document.createElement("div");
  card.classList.add("card");

  const policeID = doc.data().policeID;
  const policeName = doc.data().policeName;
  const policeStation = doc.data().policeStation;
  const policeRank = doc.data().policeRank;
  const policeContact = doc.data().policeContact;

  card.innerHTML = `
    <p><b>Police ID:</b> ${policeID}</p>
    <p><b>Name:</b> ${policeName}</p>
    <p><b>Police Station:</b> ${policeStation}</p>
    <p><b>Rank:</b> ${policeRank}</p>
    <p><b>Contact:</b> ${policeContact}</p>
  `;

  detailsList.appendChild(card);
}

// Get data from Firestore database
db.collection("police")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      renderCard(doc);
    });
  })
  .catch((error) => {
    console.error("Error getting data: ", error);
    alert("Error getting data, please try again.");
  });

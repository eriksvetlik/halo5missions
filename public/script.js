//Section for mission container
const missionssection = document.getElementById("missionssection");

//Create container for mission cards
const container = document.createElement("div");
container.setAttribute("class", "container");
missionssection.append(container);

//Connect to app.get("/missions") on server to get mission data
const API_URL = `/missions`;

//Function to use missions data and create cards
async function getMissions() {
  try {
    const response = await fetch(API_URL);
    const missions = await response.json();

    //For each mission, create its own card
    missions.forEach((mission) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const img = document.createElement("img");
      img.src = mission.imageUrl;

      const h3 = document.createElement("h3");
      h3.textContent = mission.name;

      const p = document.createElement("p");
      p.textContent = mission.description;

      container.append(card);
      card.append(img);
      card.append(h3);
      card.append(p);
    });
  } catch (error) {
    console.log(error);
    alert("Error with API - Check console log");
  }
}

getMissions();

//Remove loader after 250 milliseconds
setTimeout(() => {
  loader.remove();
}, 250);

//About popup
$(document).ready(function () {
  $(".open-popup-link").magnificPopup({
    type: "inline",
    midClick: true,
  });
});

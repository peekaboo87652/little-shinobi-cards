const img = document.querySelector(".image-container img");
const name = document.querySelector(".character-name");
const village = document.querySelector(".character-village");
const jutsu = document.querySelector(".character-jutsu");

const button = document.querySelector(".next-button");

const clickSound = new Audio("assets/Click-audio.wav");
clickSound.preload = "auto";

button.addEventListener("click", () => {
  clickSound.currentTime = 0; // restart sound if clicked fast
  clickSound.play();
    loadCharacter();
});


//
async function init() {
  try {
    const res = await fetch("./character.json");
    data = await res.json();
    loadCharacter();
  } catch (err) {
    console.log("Error loading characters", err);
  }
}
let currentIndex = 0;
let data = [];
function loadCharacter() {
  const character = data[currentIndex];

  // const randomIndex = Math.floor(Math.random()*data.length);
  // const character = data[randomIndex];

  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = character.image;
    name.textContent = character.name;
    village.textContent = character.village;
    jutsu.textContent = character.jutsu;

    img.classList.remove("fade-out");
  }, 200);

  currentIndex++;
  if (currentIndex >= data.length) {
    currentIndex = 0;
  }
}



init();

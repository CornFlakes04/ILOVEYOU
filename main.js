onload = () => {
  document.body.classList.remove("container");
};

const imageFolder = "LOVE/";

const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpeg",
  "pic6.jpeg",
  "pic7.png",
  "pic8.png",
  "pic9.jpeg",
  "pic10.jpg",
  "pic11.jpg",
  "pic12.jpg",
  "pic13.jpg",
  "pic14.jpg",
  "pic15.jpg",
];

shuffleArray(images);

const stripTrack = document.getElementById("stripTrack");

// Add images twice for smooth infinite scroll
images.concat(images).forEach(file => {
  const img = document.createElement("img");
  img.src = imageFolder + file;
  stripTrack.appendChild(img);
});


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function changeMessage() {
  const text = document.querySelector(".message-text");
  text.innerHTML = `
    You are stronger than you think,
    and more amazing than you know. 🌷
  `;
}


function openLetter() {
  const envelope = document.querySelector(".envelope-wrapper");
  const message = document.getElementById("loveMessage");

  envelope.classList.add("hidden");
  message.classList.remove("hidden");
}




const messageBox = document.getElementById("loveMessage");
const envelope = document.querySelector(".envelope-wrapper");

messageBox.addEventListener("click", () => {

  // Start collapse animation
  messageBox.classList.add("collapsing");

  // After animation finishes
  setTimeout(() => {
    messageBox.classList.add("hidden");   // completely remove it
    messageBox.classList.remove("collapsing");

    envelope.classList.remove("hidden");  // show envelope again
  }, 600); // match transition time
});






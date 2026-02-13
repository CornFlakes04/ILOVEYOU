onload = () => {
  document.body.classList.remove("container");
};

function changeMessage() {
  const text = document.querySelector(".message-text");
  text.innerHTML = `
    You are stronger than you think,
    and more amazing than you know. 🌷
  `;
}


function openLetter() {
  document.querySelector(".envelope-wrapper").style.display = "none";
  document.getElementById("loveMessage").classList.remove("hidden");
}

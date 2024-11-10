// Matrix effect
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

// Ghostwriting effect
const ghostText = document.getElementById("ghostText");
const message = "This is your Last Chance, you have to choose";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    ghostText.innerHTML += message.charAt(index);
    ghostText.style.opacity = 1;  // Show the text gradually
    index++;
    setTimeout(typeWriter, 100); // Adjust speed by changing 100
  }
}

// Start the ghostwriting effect when the page loads
window.onload = typeWriter;

// Pill click event handlers
const pillLeft = document.querySelector('.pill-left');
const pillRight = document.querySelector('.pill-right');

pillLeft.addEventListener('click', () => {
  alert('You have chosen the red pill. Welcome to the real world.');
});

pillRight.addEventListener('click', () => {
  alert('You have chosen the blue pill. You will remain in the Matrix.');
});

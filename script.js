const text = `Happy birthday to you 💖
Wish you many many happy returns of the day Baishakhi.
Happy 22 years 🎂 and enjoy your life ✨`;

let i = 0;

function startSurprise() {
  document.getElementById("message").innerHTML = "";
  i = 0;
  typeEffect();
  confettiEffect();
}

function typeEffect() {
  if (i < text.length) {
    document.getElementById("message").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

function confettiEffect() {
  for (let i = 0; i < 60; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background = randomColor();
    confetti.style.opacity = Math.random();

    document.body.appendChild(confetti);

    let fall = setInterval(() => {
      let top = parseInt(confetti.style.top || 0);
      if (top > window.innerHeight) {
        clearInterval(fall);
        confetti.remove();
      }
      confetti.style.top = top + 5 + "px";
    }, 20);
  }
}

function randomColor() {
  const colors = ["red", "yellow", "blue", "pink", "white"];
  return colors[Math.floor(Math.random() * colors.length)];
}
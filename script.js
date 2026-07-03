// ====== SET YOUR TARGET DATE HERE ======
const targetDate = new Date("2026-08-10T00:00:00").getTime();

// ====== COUNTDOWN LOGIC ======
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ====== YES / NO BUTTONS + MODALS ======
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

const modalOverlaySad = document.getElementById("modalOverlaySad");
const closeModalSad = document.getElementById("closeModalSad");

yesBtn.addEventListener("click", () => {
  modalOverlay.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modalOverlay.classList.remove("show");
});

noBtn.addEventListener("click", () => {
  modalOverlaySad.classList.add("show");
});

closeModalSad.addEventListener("click", () => {
  modalOverlaySad.classList.remove("show");
});
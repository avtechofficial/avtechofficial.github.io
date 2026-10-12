// IMPORTANT: Replace this with your WhatsApp number including country code.
// India example format: 919876543210 (no +, spaces or hyphens).
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const WHATSAPP_MESSAGE = "Hello AVTECH, I am interested in your construction services. Please contact me.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();


const EMAIL_ADDRESS = "avtechofficial26@gmail.com";
const EMAIL_SUBJECT = "Construction Service Enquiry";
const EMAIL_MESSAGE =
  "Hello AVTECH, I am interested in your construction services. Please contact me.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href =
    `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_MESSAGE)}`;
  link.removeAttribute("target");
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
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
}

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

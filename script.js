
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Mobile navigation
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

// Automatic copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Project inspiration slider
const projectCards = document.querySelectorAll(
  ".project-track .project-card"
);
const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const projectCount = document.getElementById("project-count");

if (projectCards.length && prevButton && nextButton) {
  let currentProject = 0;

  function showProject(index) {
    projectCards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    if (projectCount) {
      projectCount.textContent =
        `${currentProject + 1} / ${projectCards.length}`;
    }
  }

  // Previous photo
  prevButton.addEventListener("click", () => {
    currentProject =
      (currentProject - 1 + projectCards.length) %
      projectCards.length;
    showProject(currentProject);
  });

  // Next photo
  nextButton.addEventListener("click", () => {
    currentProject =
      (currentProject + 1) % projectCards.length;
    showProject(currentProject);
  });

  // Swipe left or right on touchscreens
  const track = document.querySelector(".project-track");
  let touchStartX = 0;

  if (track) {
    track.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener("touchend", (event) => {
      const touchEndX = event.changedTouches[0].screenX;
      const difference = touchEndX - touchStartX;

      if (Math.abs(difference) < 50) return;

      if (difference < 0) {
        currentProject =
          (currentProject + 1) % projectCards.length;
      } else {
        currentProject =
          (currentProject - 1 + projectCards.length) %
          projectCards.length;
      }

      showProject(currentProject);
    }, { passive: true });
  }

  // Show the first photo on page load
  showProject(currentProject);
}


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.style.display = mobileNav.classList.contains("active")
      ? "flex"
      : "none";

    menuButton.addEventListener("click", function () {
      mobileNav.classList.toggle("active");
      mobileNav.style.display = mobileNav.classList.contains("active")
        ? "flex"
        : "none";
    });
  });
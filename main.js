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

const carousel = document.querySelector('.reviews-carousel');

    function startCarousel() {
      const reviews = carousel.querySelectorAll('.review');
      const firstReview = reviews[0];

      carousel.style.transition = 'transform 0.5s ease';
      carousel.style.transform = `translateX(-${firstReview.offsetWidth + 20}px)`;

      setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        carousel.appendChild(firstReview);
      }, 500);
    }

    setInterval(startCarousel, 3000);
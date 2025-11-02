const navBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

navBtn.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("close");
        navLinks.classList.remove("open");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.add("close");
  navLinks.addEventListener(
    "animationend",
    (e) => {
      navLinks.classList.remove("close");
      navLinks.classList.remove("open");
    },
    { once: true }
  );
});

const explore = document.querySelector(".explore_wrapper_inner");

const exploreContent = Array.from(explore.children);

exploreContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  explore.appendChild(duplicateNode);
});
// Swiper setup for Athletic Picks section
var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1, // ✅ only one image visible
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


const athletic = document.querySelector(".athletic_wrapper_inner");

const athleticContact = Array.from(athletic.children);

athleticContactContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  athletic.appendChild(duplicateNode);
});
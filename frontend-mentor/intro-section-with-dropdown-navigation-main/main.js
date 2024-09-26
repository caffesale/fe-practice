const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileCloseButton = document.querySelector(".mobile-close");

mobileNavButton.addEventListener("click", toggleMobileNav);
mobileCloseButton.addEventListener("click", toggleMobileNav);

function toggleMobileNav() {
  const mobileNavAside = document.querySelector(".mobile-nav-aside");
  mobileNavAside.classList.toggle("mobile-only");

  const isHidden = mobileNavAside.classList.contains("mobile-only");

  mobileNavAside.setAttribute("aria-hidden", isHidden);
  if (isHidden) {
    mobileNavAside.style.right = "-100vw";
    mobileNavAsdie.style.display = "block";
  } else {
    mobileNavAside.style.right = "0";
    mobileNavAsdie.style.display = "none";
  }
}

const navMenu = document.getElementById("nav-links");
const navLinks = navMenu.querySelectorAll("a");
function toggleMenu() { navMenu.classList.toggle("active"); }
navLinks.forEach(link => link.addEventListener("click", () => navMenu.classList.remove("active")));

// ---- LIGHTBOX ----
const galleryItems = document.querySelectorAll(".gallery img");
let currentIndex = 0;
galleryItems.forEach((img, i) => { img.addEventListener("click", () => openGallery(i)); });
function openGallery(i) {
  currentIndex = i;
  const img = galleryItems[i];
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-title").textContent = img.dataset.title;
  const link = document.getElementById("lightbox-link");
  link.href = img.dataset.link;
  link.textContent = "Ver landing completa (" + img.dataset.title + ")";
  document.getElementById("lightbox").style.display = "flex";
}
function changeSlide(step) {
  currentIndex = (currentIndex + step + galleryItems.length) % galleryItems.length;
  openGallery(currentIndex);
}
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") document.getElementById("lightbox").style.display = "none";
});

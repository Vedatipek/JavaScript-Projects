const images = document.querySelectorAll("#gallery img");
const lightbox = document.getElementById("lightbox");

images.forEach(image => {
  image.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightbox.style.opacity = 0;

    const img = document.createElement("img");
    img.src = image.dataset.large || image.src;

    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(img);

    setTimeout(() => {
      lightbox.style.opacity = 1;
    }, 10);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.opacity = 0;
  setTimeout(() => {
    lightbox.classList.remove("active");
    lightbox.innerHTML = "";
  }, 200);
});

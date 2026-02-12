// ================= LETTER OPEN =================

function openLetter() {
    document.querySelector(".slider-wrapper").classList.add("slider-hide");

    const letterContainer = document.getElementById("letter-container");
    const letterWindow = document.querySelector(".letter-window");

    letterContainer.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
}


// ================= NO BUTTON MOVE =================

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        const distance = 200;
        const angle = Math.random() * Math.PI * 2;

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}


// ================= YES BUTTON CLICK =================

if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        const title = document.getElementById("letter-title");
        const catImg = document.getElementById("letter-cat");
        const buttons = document.getElementById("letter-buttons");
        const finalText = document.getElementById("final-text");

        title.textContent = "Yippeeee!";
        catImg.src = "cat_dance.gif";
        buttons.style.display = "none";
        finalText.style.display = "block";

        document.querySelector(".letter-window").classList.add("final");
    });
}


// ================= SLIDER =================

let currentSlide = 1; // start from center

function moveSlide(direction) {
    const slider = document.getElementById("slider");
    const totalSlides = 3;

    currentSlide += direction;

    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > totalSlides - 1) currentSlide = totalSlides - 1;

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

window.onload = function () {
    const slider = document.getElementById("slider");
    slider.style.transform = "translateX(-100%)";
};


// ================= GALLERY =================

let galleryIndex = 0;

function toggleGallery() {
    document.querySelector(".slider-wrapper").classList.add("slider-hide");


    const gallery = document.getElementById("gallery");

    if (gallery.style.display === "block") {
        gallery.style.display = "none";
    } else {
        gallery.style.display = "block";
    }
}

function moveGallery(direction) {
    const track = document.querySelector(".gallery-track");
    const images = document.querySelectorAll(".gallery-track img");

    galleryIndex += direction;

    if (galleryIndex < 0) galleryIndex = 0;
    if (galleryIndex > images.length - 1)
        galleryIndex = images.length - 1;

    track.style.transform = `translateX(-${galleryIndex * 200}px)`;
}


// ================= DROP LETTER =================

function openLetterDrop() {
    document.querySelector(".slider-wrapper").classList.add("slider-hide");


    const container = document.getElementById("dropLetter");
    const letter = document.getElementById("letterDropContent");

    container.style.display = "block";

    setTimeout(() => {
        letter.style.marginTop = "150px";
    }, 100);
}

function closeLetter() {
    document.getElementById("letter-container").style.display = "none";
    document.querySelector(".slider-wrapper").classList.remove("slider-hide");
}

function closeGallery() {
    document.getElementById("gallery").style.display = "none";
    document.querySelector(".slider-wrapper").classList.remove("slider-hide");
}

function closeDropLetter() {
    document.getElementById("dropLetter").style.display = "none";
    document.querySelector(".slider-wrapper").classList.remove("slider-hide");
}



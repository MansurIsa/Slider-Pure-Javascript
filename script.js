const images = document.querySelectorAll("img");
const slide = document.querySelectorAll(".slide");
const slides = document.querySelector(".slides");
// const leftArrow = document.querySelector(".left");
// const rightArrow = document.querySelector(".right");
const dot = document.querySelectorAll(".dot");
const dots = document.querySelector(".dots");


let index = 0;


function slideShow() {

    if (index >= slide.length) {
        index = 0;
    }
    if (index < 0) {
        index = slide.length - 1;
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove("act");
    }
    slide[index].classList.add("act");


}

function rightArrow() {
    index++;
    slideShow();
    dots.querySelector(".active").classList.remove("active");
    dot[index].classList.add("active");
}


function leftArrow() {
    index--;
    slideShow();
    dots.querySelector(".active").classList.remove("active");
    dot[index].classList.add("active");
}


for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function () {
        dots.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        slides.querySelector(".act").classList.remove("act");
        slide[i].classList.add("act")

    })
}

let time = setInterval(rightArrow, 4000);

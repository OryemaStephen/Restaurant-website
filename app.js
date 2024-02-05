//Add smooth scroll behaviour and highlight clicked menu.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll('#nav-link').forEach(anchor=>{
    anchor.addEventListener('click',()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
})

window.addEventListener('scroll', function() {
  let header = document.getElementById('header');
  let section = document.getElementsByClassName('scrollSection')[0];
  
  // Get the top position of the section element
  let sectionTop = section.getBoundingClientRect().top;

  // Change header opacity and height when section top reaches the bottom of the header
  if (sectionTop <= header.clientHeight) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
    header.style.height = '80px';
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    header.style.height = '100px';
  }
});




//Slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}

// setInterval(function() {
//   plusSlides(1); 
// }, 5000);


//Set automatic copyright year
function getYear(){
  let today = new Date();
document.getElementById('year').innerText = today.getFullYear();
};

getYear();
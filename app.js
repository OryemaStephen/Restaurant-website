const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Smooth scroll behavior and highlight clicked menu
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Remove 'active' class from all menu items
        document.querySelectorAll('.nav-menu a').forEach(item => {
            item.classList.remove('active');
        });

        // Add 'active' class to the clicked menu item
        this.classList.add('active');

        // Smooth scroll behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

    });
});


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
document.addEventListener('DOMContentLoaded', function() {
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
      if (n > slides.length) {
          slideIndex = 1;
      }    
      if (n < 1) {
          slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slides[slideIndex - 1].style.display = "block"; 
  }

  // Set up event listeners for slide navigation
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  prevButton.addEventListener('click', function() {
      plusSlides(-1);
  });

  nextButton.addEventListener('click', function() {
      plusSlides(1);
  });

  // Automatic slide advancement every 5 seconds
  setInterval(function() {
      plusSlides(1); 
  }, 4000);
});



//Set automatic copyright year
function getYear(){
const today = new Date();
document.getElementById('year').innerText = today.getFullYear()
}
getYear();

//Cart page

//Remove cart Item
let removeBtns = document.querySelectorAll('.remove-btn');

removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', function(){
        const cartItem = this.closest('.receipt-div');
        if (cartItem) {
            cartItem.remove();
        }
    });
});


// Purchase button
const purchaseBtn = document.getElementById('purchase-btn');
purchaseBtn.addEventListener('click', function() {
    alert('Thanks for shopping with us!');
});




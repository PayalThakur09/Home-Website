let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.getElementById('category');
    const boxes = carousel.querySelectorAll('.box');
    const boxWidth = boxes[0].offsetWidth + 20; // Include margin in the width calculation
    const totalItems = boxes.length;
    
    // Update the current index for moving one item at a time
    currentIndex += direction;

    // Ensure the currentIndex doesn't go out of bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Loop to last image
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Loop back to first image
    }
    
    // Shift the carousel by the width of one box
    carousel.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
}



// Testimonial code 
// let currentSlide = 0;

// function showTestimonialSlide(index) {
//     const slides = document.querySelectorAll('.testimonial-item');
//     if (index >= slides.length) {
//         currentSlide = 0; // Loop back to the first slide
//     } else if (index < 0) {
//         currentSlide = slides.length - 1; // Loop to the last slide
//     } else {
//         currentSlide = index;
//     }

//     slides.forEach((slide, i) => {
//         slide.style.display = (i === currentSlide) ? 'flex' : 'none';
//     });
// }

// function nextTestimonialSlide() {
//     showTestimonialSlide(currentSlide + 1);
// }

// function prevTestimonialSlide() {
//     showTestimonialSlide(currentSlide - 1);
// }

// // Initialize the first slide
// showTestimonialSlide(currentSlide);


//-------------------------Social -------------

let currentSlide = 0;

function nextSlide() {
    const carousel = document.getElementById('social-carousel');
    const boxes = document.querySelectorAll('.carousel-box');
    if (currentSlide < boxes.length - 1) {
        currentSlide++;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function prevSlide() {
    const carousel = document.getElementById('social-carousel');
    if (currentSlide > 0) {
        currentSlide--;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}


function moveCarousel(direction) {
    const carousel = document.getElementById('category-carousel');
    const boxes = document.querySelectorAll('.carousel-box');
    const totalSlides = boxes.length;

    // Calculate the new slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Move the carousel
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
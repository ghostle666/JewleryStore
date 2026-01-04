
const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;

let intervalId = null;

initializeSlider()

function initializeSlider(){

    if(slides.length > 0){

        slides[slideIndex].classList.add("displaySlide");

        intervalId = setInterval(nextSlide, 5000);

    }

}



function showSlide(index){

    if(index >= slides.length){

        slideIndex = 0;

    }

    else if(index < 0){

        slideIndex = slides.length - 3;

    }



    slides.forEach(slide => {

        slide.classList.remove("displaySlide");

    });

    slides[slideIndex].classList.add("displaySlide");

}



function prevSlide(){

    clearInterval(intervalId);

    slideIndex--;

    showSlide(slideIndex);

}



function nextSlide(){

    slideIndex++;

    showSlide(slideIndex);

}



window.onload = function() {

const Days = document.getElementById('Days');
const Hours  = document.getElementById('Hours');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');




const targetDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;


    if (distance <= 0) {
        clearInterval(timerInterval); // Stop the timer when the target date is reached
        Days.innerHTML = "0";
        Hours.innerHTML = "0";
        Minutes.innerHTML = "0";
        Seconds.innerHTML = "0";
        return;
    }


    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

 Days.innerHTML = days;
Hours.innerHTML = hours.toString().padStart(2, '0');
Minutes.innerHTML = minutes.toString().padStart(2, '0');
Seconds.innerHTML = seconds.toString().padStart(2, '0');
}

 const timerInterval = setInterval(timer, 1000);

};


const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");

let popupClosed = false;

// Show the popup when the user scrolls 200px down
window.onscroll = function() {
  if (window.scrollY > 200 && !popupClosed) {
    popup.style.display = "block";  // Show the popup
  }
};

// Close the popup when the user clicks the close button
closeButton.onclick = function() {
  popup.style.display = "none";  // Hide the popup
  popupClosed = true;
};
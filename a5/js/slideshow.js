var myImages =["https://i.pinimg.com/originals/bf/44/fa/bf44fa8743e026c7d3955dd28a4d32fa.jpg", 
							 "https://wallup.net/wp-content/uploads/2015/12/124083-skyscraper-New_York_City-city-landscape.jpg", 
							 "https://wallpaperaccess.com/full/33929.jpg", 
							 "https://th.bing.com/th/id/OIP.ZRQLcRGiP0kn5iXqv1FZVgHaEo?rs=1&pid=ImgDetMain", 
							 "https://jakadatoursegypt.com/wp-content/uploads/2022/07/Khafre-pyramid.jpg"];

var captionImages =["Beautiful scenery of Japan with Mount Fuji in the background and Sakura Trees in the front", 
										"Beatiful scenery of New York City at night with the city buildings reflecting in the water", 
										"Beautiful scenery of the Great Wall of China under the sunset with huge mountains in the background", 
										"Beautiful scenery of the Eiffel Tower in Paris with the sunset in the background", 
										"Beautiful scenery of Egypt with the Pyramid of Giza in the background under the bright sun"];

var index = 0; 

var countdown = 4;

function updateImage() {
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
}

function resetTimer() {
  countdown = 4;
  document.getElementById("countdown").textContent = countdown;
}

function next() {
 if (myImages.length == index+1)
  index = 0;
 else
  index++;
 updateImage();
} 
 
function back() {
 if (index === 0)
  index=myImages.length-1;
 else
  index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

// Moves to previous slide when previous button is clicked and resets timer if auto slide is on
previousButton.addEventListener("click", () => {
 if (document.getElementById("auto").checked) {
     resetTimer();
 }
	back();
});

// Moves to next slide when next button is clicked and resets timer if auto slide is on
nextButton.addEventListener("click", () => {
 if (document.getElementById("auto").checked) {
     resetTimer();
 }
	next();
});

// When countdown reaches 0 (4 seconds), next slide is automatically shown if "Run automatically" is checked
function autoSlide() {
if (document.getElementById("auto").checked) {
 countdown--;
	document.getElementById("countdown").textContent = countdown;
 if (countdown <= 0) {
  next();
  resetTimer();
  }
 }
}

setInterval(autoSlide, 1000); // Next

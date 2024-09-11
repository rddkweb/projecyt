const slider = document.getElementById("slider");
const images = slider.getElementsByClassName("slider-img");

// Shuffle images randomly
function shuffleImages() {
	let shuffledImages = Array.from(images);
	shuffledImages.sort(() => Math.random() - 0.5);
	slider.innerHTML = ""; // Clear the current slider content
	shuffledImages.forEach((img) => {
		slider.appendChild(img); // Append shuffled images
	});
}

// Function to slide images automatically
function startSlider() {
	let index = 0;
	const interval = 3000; // 3 seconds per slide
	const totalSlides = images.length;

	setInterval(() => {
		index = (index + 1) % totalSlides;
		slider.style.transform = `translateX(${-index * 100}%)`;
	}, interval);
}

// Shuffle the images and start the slider
shuffleImages();
startSlider();

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    changeSlide(1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Show the "Back to Top" button when the user scrolls down 100px from the top of the page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const goToVideoBtn = document.getElementById("goToVideoBtn");
    const goToQuizBtn = document.getElementById("goToQuizBtn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
        goToQuizBtn.style.display = "block";
        goToVideoBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
        goToQuizBtn.style.display = "none";
        goToVideoBtn.style.display = "none";
    }
}

function goToVideo() {
    document.getElementById('video-panel').scrollIntoView({
        behavior: 'smooth'
    });
}


// Scroll smoothly to the top when the "Back to Top" button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function goToQuiz1() {
    window.location.href = " exoplanet/Quizzes/quiz.html";
}

function goToQuiz2() {
    window.location.href = " exoplanet/Quizzes/NeptunianPlanets.html";
}

function goToQuiz3() {
    window.location.href = " exoplanet/Quizzes/SuperEarth.html";
}

function goToQuiz4() {
    window.location.href = " exoplanet/Quizzes/TerrestrialPlanets.html";
}

// Custom Video Controls
window.onload = function() {
    const video = document.querySelector("video");
    const playButton = document.getElementById("playBtn");
    const pauseButton = document.getElementById("pauseBtn");
    const restartButton = document.getElementById("restartBtn");

    // Play the video
    playButton.addEventListener("click", function() {
        video.play();
        playButton.disabled = true;
        pauseButton.disabled = false;
    });

    // Pause the video
    pauseButton.addEventListener("click", function() {
        video.pause();
        pauseButton.disabled = true;
        playButton.disabled = false;
    });

    // Restart the video
    restartButton.addEventListener("click", function() {
        video.currentTime = 0;
        video.play();
        playButton.disabled = true;
        pauseButton.disabled = false;
    });

    // When the video ends, re-enable play button
    video.addEventListener("ended", function() {
        playButton.disabled = false;
        pauseButton.disabled = true;
    });
};

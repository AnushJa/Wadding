// Countdown Timer
const weddingDate = new Date("2025-08-07T15:00:00");

function updateCountdown() {
  const now = new Date();
    const diff = weddingDate - now;
    const titleEl = document.getElementById("countdown-title");

    if (diff <= 0) {
  
        titleEl.textContent = "Հարսանիքից անցել է";

        const passed = now - weddingDate;
        const daysPassed = Math.floor(passed / (1000 * 60 * 60 * 24));
        const hoursPassed = Math.floor((passed / (1000 * 60 * 60)) % 24);
        const minutesPassed = Math.floor((passed / (1000 * 60)) % 60);
        const secondsPassed = Math.floor((passed / 1000) % 60);

        document.getElementById("days").textContent = daysPassed;
        document.getElementById("hours").textContent = hoursPassed;
        document.getElementById("minutes").textContent = minutesPassed;
        document.getElementById("seconds").textContent = secondsPassed;
        
       return;
    }

    titleEl.textContent = "Հարսանիքին մնաց";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);
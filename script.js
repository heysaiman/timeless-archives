// --- 1. Water Ripple Effect Initialization ---
$(document).ready(function() {
    try {
        $('#ripple-bg').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04 // Controls how intense the glass water distortion is
        });
    } catch (e) {
        $('.error').show().text(e);
    }
});

// --- 2. Dynamic Welcome / Swagatam Toggle ---
const welcomeText = document.getElementById('welcome-text');
const words = ["Welcome", "Swagatam"];
let wordIndex = 0;

setInterval(() => {
    // Fade out
    welcomeText.style.opacity = 0;
    
    setTimeout(() => {
        // Change text and fade back in
        wordIndex = (wordIndex + 1) % words.length;
        welcomeText.innerText = words[wordIndex];
        welcomeText.style.opacity = 1;
    }, 1000); // Wait for fade out to complete before changing text
}, 5000); // Triggers every 5 seconds

// --- 3. The Luxurious Ticking Countdown ---
// Target Date: November 30, 2025
const startDate = new Date('2025-11-30T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = now - startDate;

    if (difference > 0) {
        // Time calculations
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        
        // Approximate calculations for larger units to keep it visually pleasing
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30.44); 
        const years = Math.floor(days / 365.25);

        // Update the top text dynamically
        document.getElementById('months-together').innerText = months;

        // Update the grid
        document.getElementById('cd-years').innerText = years;
        document.getElementById('cd-months').innerText = months % 12;
        document.getElementById('cd-weeks').innerText = weeks % 4;
        document.getElementById('cd-days').innerText = days % 30;
        document.getElementById('cd-hours').innerText = hours;
        document.getElementById('cd-minutes').innerText = minutes;
        document.getElementById('cd-seconds').innerText = seconds;
    }
}

// Run the countdown immediately, then update every second
updateCountdown();
setInterval(updateCountdown, 1000);

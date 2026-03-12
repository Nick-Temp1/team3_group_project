const stepCards = document.querySelectorAll('.step-card');

stepCards.forEach((card) => {
    card.onclick = function () {
        // Remove highlight from all cards
        stepCards.forEach((c) => (c.style.border = '3px solid transparent'));

        // Highlight the clicked card
        this.style.border = '3px solid red';
    };
});

const trackBtn = document.getElementById('trackBtn');
const searchInput = document.getElementById('search-bar');
const resultText = document.getElementById('trackingResult');

const modal = new bootstrap.Modal(document.getElementById('trackingModal'));

// Hardcoded tracking data
const validTrackingNumber = 'DMV123456';

trackBtn.addEventListener('click', () => {
    const userInput = searchInput.value.trim();

    if (userInput === validTrackingNumber) {
        resultText.textContent =
            'Application Found! Status: Processing. Estimated completion: 5 business days.';
    } else {
        resultText.textContent =
            'No application found. Please check your tracking number or email.';
    }

    modal.show();
});

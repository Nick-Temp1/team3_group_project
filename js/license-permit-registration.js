const stepCards = document.querySelectorAll('.step-card');

stepCards.forEach((card) => {
    card.onclick = function () {
        // Remove highlight from all cards
        stepCards.forEach((c) => (c.style.border = '3px solid transparent'));

        // Highlight the clicked card
        this.style.border = '3px solid red';
    };
});

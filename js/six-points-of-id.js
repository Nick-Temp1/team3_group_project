function toggleMoreInfo() {
    const button = document.getElementById('learnMoreBtn');
    const info = document.getElementById('moreInfo');

    if (info.style.display === 'none') {
        info.style.display = 'block'; // Show content
        button.textContent = 'Show Less'; // Change button text
    } else {
        info.style.display = 'none'; // Hide content
        button.textContent = 'Learn More'; // Reset button text
    }
}

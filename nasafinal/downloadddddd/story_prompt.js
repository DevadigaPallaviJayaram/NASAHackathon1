// Add interactivity to the "Continue Journey" button
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Continue Journey" button
    const continueBtn = document.querySelector('.continue-btn');
    
    // Add a click event listener to the button
    continueBtn.addEventListener('click', function() {
        // Action to be performed when the button is clicked
        alert('Your journey to find exoplanets continues... Let\'s explore the unknown!');
        window.location.href = "exolore.html"; // Example of page redirection
    });
});
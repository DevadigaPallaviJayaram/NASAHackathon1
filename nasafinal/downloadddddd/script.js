function login() {
  // Add logic for login functionality
  window.location.href = "login.html"; // Redirect to a login page
}

function continueAsGuest() {
  // Logic for continuing as a guest
  window.location.href = "story_prompt.html"; // Redirect to explore without login
}

  function handleFeedback(event) {
    event.preventDefault();
    // Handle feedback submission logic here
    alert("Thank you for your feedback!");
    window.location.href = 'index.html'; // Redirect to home page after submission
  }
  // Function to add a bookmark
function addBookmark(event) {
    event.preventDefault();
    
    const bookmarkName = document.getElementById('bookmarkName').value;
    const bookmarkUrl = document.getElementById('bookmarkUrl').value;

    // Get existing bookmarks from local storage or create a new array
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // Add new bookmark to the array
    bookmarks.push({ name: bookmarkName, url: bookmarkUrl });

    // Save the updated bookmarks array back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Clear the form fields
    document.getElementById('bookmarkForm').reset();

    // Display the updated bookmarks
    displayBookmarks();
}

// Function to display bookmarks
function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = '';

    bookmarks.forEach(bookmark => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.name}</a>`;
        bookmarkList.appendChild(li);
    });
}

// Load bookmarks when the page loads
window.onload = displayBookmarks;
// Simple feedback form submission
function submitFeedback(event) {
  event.preventDefault(); // Prevent the form from actually submitting
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    document.getElementById('feedbackMessage').textContent = "Thank you!! for your feedback, " + name + "!";
    document.getElementById('feedbackMessage').style.color = "green";  // Make the thank you message green
    document.getElementById('feedbackMessage').style.fontSize = "1.5em"; // Increase font size for emphasis
    document.getElementById('feedbackForm').reset(); // Reset the form after submission
  } else {
    document.getElementById('feedbackMessage').textContent = "Please fill out all fields.";
    document.getElementById('feedbackMessage').style.color = "red";  // Display an error in red
  }
}

function updateSatisfactionValue(value) {
  document.getElementById('satisfaction-value').textContent = value;
}


//STORY PROMPT
// Add interactivity to the "Continue Journey" button
document.addEventListener('DOMContentLoaded', function() {
  // Select the "Continue Journey" button
  const continueBtn = document.querySelector('.continue-btn');
  
  // Add a click event listener to the button
  continueBtn.addEventListener('click', function() {
      // Action to be performed when the button is clicked
      alert('Your journey to find exoplanets continues... Let\'s explore the unknown!');
      
      // Optionally, you can redirect to another page for the journey
      window.location.href = "exolore.html"; // Example of page redirection
  });
});

function navigateTo(page) {
  window.location.href = page;
}

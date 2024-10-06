// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Modal elements
  const loginModal = document.getElementById('login-modal');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const closeButton = document.querySelector('.close-button');

  // Function to open the login modal
  window.openLoginModal = function() {
      if (loginModal) {
          loginModal.classList.remove('hidden');
          loginModal.classList.add('show');
      }
  };

  // Function to close the login modal
  window.closeLoginModal = function() {
      if (loginModal) {
          loginModal.classList.remove('show');
          loginModal.classList.add('hidden');
      }
  };

  // Event listener for login button in the header
  if (loginBtn) {
      loginBtn.addEventListener('click', openLoginModal);
  }

  // Event listener for close button inside the modal
  if (closeButton) {
      closeButton.addEventListener('click', closeLoginModal);
  }

  // Event listener to close modal when clicking outside the modal content
  window.addEventListener('click', (e) => {
      if (e.target === loginModal) {
          closeLoginModal();
      }
  });

  // Handle login form submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          // Simulate authentication (replace with real authentication logic)
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;

          if (username && password) {
              alert(`Welcome, ${username}!`);
              closeLoginModal();
              if (loginBtn) loginBtn.style.display = 'none';
              if (logoutBtn) logoutBtn.style.display = 'inline-block';
          } else {
              alert('Please enter valid credentials.');
          }
      });
  }

  // Handle logout
  if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
          alert('You have been logged out.');
          logoutBtn.style.display = 'none';
          if (loginBtn) loginBtn.style.display = 'inline-block';
      });
  }
});
// script.js

// Modal functionality
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const closeButton = document.querySelector('.close-button');

// Open modal its showing error correct the code 
loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    loginModal.classList.add('show');
});

// Close modal
closeButton.addEventListener('click', () => {
    loginModal.classList.remove('show');
    loginModal.classList.add('hidden');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('show');
        loginModal.classList.add('hidden');
    }
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Modal elements
  const loginModal = document.getElementById('login-modal');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const closeButton = document.querySelector('.close-button');

  // Function to open the login modal
  window.openLoginModal = function() {
      if (loginModal) {
          loginModal.classList.remove('hidden');
          loginModal.classList.add('show');
      }
  };

  // Function to close the login modal
  window.closeLoginModal = function() {
      if (loginModal) {
          loginModal.classList.remove('show');
          loginModal.classList.add('hidden');
      }
  };

  // Event listener for login button in the header
  if (loginBtn) {
      loginBtn.addEventListener('click', openLoginModal);
  }

  // Event listener for close button inside the modal
  if (closeButton) {
      closeButton.addEventListener('click', closeLoginModal);
  }

  // Event listener to close modal when clicking outside the modal content
  window.addEventListener('click', (e) => {
      if (e.target === loginModal) {
          closeLoginModal();
      }
  });

  // Handle login form submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          // Simulate authentication (replace with real authentication logic)
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;

          if (username && password) {
              alert(`Welcome, ${username}!`);
              closeLoginModal();
              if (loginBtn) loginBtn.style.display = 'none';
              if (logoutBtn) logoutBtn.style.display = 'inline-block';
          } else {
              alert('Please enter valid credentials.');
          }
      });
  }


  // Handle logout
  if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
          alert('You have been logged out.');
          logoutBtn.style.display = 'none';
          if (loginBtn) loginBtn.style.display = 'inline-block';
      });
  }
});

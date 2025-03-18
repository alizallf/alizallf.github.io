//main.js

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
  
    // Check if a theme was previously saved
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      modeToggle.textContent = 'Light Mode';
    }
  
    // Toggle dark/light mode on button click
    modeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
      } else {
        modeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
      }
    });
  });
  
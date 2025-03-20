document.addEventListener('DOMContentLoaded', () => {
    // Dark/Light Mode Toggle with Icon Switch
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    
    // Function to update mode icon based on theme
    const updateModeIcon = () => {
      if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = '☀'; // Sun icon (switch to light)
      } else {
        modeToggle.textContent = '🌙'; // Moon icon (switch to dark)
      }
    };
  
    // Check saved theme
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
    }
    updateModeIcon();
  
    modeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      updateModeIcon();
    });
  
    // Tie Dropdown to Role Image Flip
    const dropdown = document.getElementById('role-dropdown');
    const roleImage = document.getElementById('role-image');
  
    dropdown.addEventListener('change', () => {
      roleImage.classList.add('flip');
      setTimeout(() => {
        if (dropdown.value === 'product-designer') {
          roleImage.src = 'images/header-productdesigner.png';
          roleImage.alt = 'Product Designer';
        } else if (dropdown.value === 'storyteller') {
          roleImage.src = 'images/header-storyteller.png';
          roleImage.alt = 'Storyteller';
        }
      }, 400); // Half of 0.8s = 400ms
      setTimeout(() => {
        roleImage.classList.remove('flip');
      }, 800);
    });
  
    // Hamburger Menu Toggle (Sidebar)
    const hamburger = document.getElementById('hamburger');
    const overlayMenu = document.getElementById('overlay-menu');
    const closeMenu = document.getElementById('close-menu');
  
    hamburger.addEventListener('click', () => {
      overlayMenu.classList.add('active');
    });
    closeMenu.addEventListener('click', () => {
      overlayMenu.classList.remove('active');
    });
  
    // Toggle Submenu in Overlay Menu for "Design Work"
    const submenuParents = document.querySelectorAll('.has-submenu > a');
    submenuParents.forEach(parentLink => {
      parentLink.addEventListener('click', (e) => {
        e.preventDefault();
        const parentLi = parentLink.parentElement;
        parentLi.classList.toggle('open');
      });
    });
  });
  
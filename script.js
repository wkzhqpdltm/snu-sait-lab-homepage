// Toggle the mobile navigation menu on small screens.
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }


  // Override navigation links to replace history entry instead of pushing a new one
  const navLinks = document.querySelectorAll('nav a[href]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // only handle internal links
      const href = link.getAttribute('href');
      // ignore links starting with http or https
      if (!href.startsWith('http')) {
        event.preventDefault();
        // replace the current history entry so the back button leaves the site
        window.location.replace(href);
      }
    });
  });
});
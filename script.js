// Toggle the mobile navigation menu on small screens.
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Dark mode toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const rootElement = document.documentElement;
  const storedTheme = localStorage.getItem('snu-sait-theme');
  if (storedTheme) {
    rootElement.setAttribute('data-theme', storedTheme);
    // update button icon based on stored theme
    if (themeToggle) {
      themeToggle.textContent = storedTheme === 'dark' ? '☀️' : '🌙';
    }
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = rootElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      rootElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('snu-sait-theme', newTheme);
      // update icon
      themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
  }
});
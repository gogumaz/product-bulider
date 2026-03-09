// theme.js
export function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.setAttribute('data-theme', 'dark');
  }
}

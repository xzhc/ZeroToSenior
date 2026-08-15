const themeToggle = document.getElementById('theme-toggle'); 
    const themeIcon = themeToggle.querySelector('.theme-icon');

    // 1. Read stored preference or fall back to system dark/light preference
    const savedTheme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches
  ? 'light' : 'dark');

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
    }

    // 2. Initialize theme on load
    applyTheme(savedTheme);

    // 3. Toggle theme on user click
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.
  getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' :
  'light';
      applyTheme(nextTheme);
    });
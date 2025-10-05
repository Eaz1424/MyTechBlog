const STORAGE_KEY = 'my-tech-blog-theme';

function applyTheme(theme, toggleButton) {
  document.body.dataset.theme = theme;
  if (!toggleButton) {
    return;
  }

  const isDark = theme === 'dark';
  toggleButton.setAttribute('aria-pressed', String(isDark));
  toggleButton.querySelector('.theme-toggle__icon').textContent = isDark ? '\u263D' : '\u263C';
  toggleButton.querySelector('.theme-toggle__label').textContent = isDark ? 'Dark' : 'Light';
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('[data-theme-toggle]');
  if (!toggleButton) return;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem(STORAGE_KEY);
  const initialTheme = storedTheme || (prefersDark.matches ? 'dark' : 'light');

  applyTheme(initialTheme, toggleButton);

  toggleButton.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme, toggleButton);
  });

  prefersDark.addEventListener('change', (event) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return;
    applyTheme(event.matches ? 'dark' : 'light', toggleButton);
  });
});

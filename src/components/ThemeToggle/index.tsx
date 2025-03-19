import { onMount } from 'solid-js';
import './style.css';

export const ThemeToggle = () => {
  const handleClick = (event: MouseEvent) => {
    const element = document.documentElement;

    element.classList.toggle('dark');
    const isDark = element.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <span
      id="theme-toggle"
      class="themeToggle"
      title="Toggle Dark Mode"
      role="switch"
      aria-checked="true"
      onClick={handleClick}
    >
      <div class="themeToggle-slide"> </div>
      <div class="themeToggle-switch"> </div>
    </span>
  );
};

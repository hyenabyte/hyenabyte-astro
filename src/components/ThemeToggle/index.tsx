import { onMount } from 'solid-js';
import './style.css';

export const ThemeToggle = () => {
  const handleClick = (event: MouseEvent) => {
    document.documentElement.classList.toggle('dark');
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
      <div class="themeToggle-slide"></div>
      <div class="themeToggle-switch"></div>
    </span>
  );
};

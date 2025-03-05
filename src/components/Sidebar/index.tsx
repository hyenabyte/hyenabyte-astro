import { createSignal, Show } from 'solid-js';
import './style.css';
import { ThemeToggle } from '../ThemeToggle';
export const Sidebar = () => {
  const [isOpen, setOpen] = createSignal(false);

  type SidebarLink = {
    url: string;
    label: string;
    icon: string;
  };

  const sidebarLinks: SidebarLink[] = [
    {
      url: '/',
      label: 'Home',
      icon: 'icon-home',
    },
    {
      url: '/blog',
      label: 'Blog',
      icon: 'icon-blog',
    },
    {
      url: '/portfolio',
      label: 'Portfolio',
      icon: 'icon-folder',
    },
  ];
  return (
    <div class="sidebar">
      <div class="menu-header">
        <Show when={isOpen()}>
          <ThemeToggle />
        </Show>
        <button
          class="menu-button"
          title="Open navigation menu"
          onClick={(event: MouseEvent) => {
            event.preventDefault();
            setOpen(!isOpen());
          }}
        >
          <i class="icon icon-menu"></i>
        </button>
      </div>
      <Show when={isOpen()}>
        <hr />
        <nav>
          <ul>
            {sidebarLinks.map((link) => (
              <li class="menu-item">
                <a href={link.url}>
                  <span class="menu-item-label">{link.label}</span>
                  <i class={'icon ' + link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Show>
    </div>
  );
};

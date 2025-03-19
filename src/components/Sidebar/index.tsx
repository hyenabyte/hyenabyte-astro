import { createSignal, For, Show } from 'solid-js';
import './style.css';
import { ThemeToggle } from '../ThemeToggle';
import { Transition } from 'solid-transition-group';
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
      icon: 'i-iconoir:home',
    },
    {
      url: '/blog',
      label: 'Blog',
      icon: 'i-iconoir:page-edit',
    },
    {
      url: '/portfolio',
      label: 'Portfolio',
      icon: 'i-iconoir:folder',
    },
  ];

  return (
    <div class="sidebar">
      <div class="menu-header">
        <Transition name="fade">
          <Show when={isOpen()}>
            <ThemeToggle />
          </Show>
        </Transition>
        <button
          class="menu-button"
          title="Open navigation menu"
          onClick={(event: MouseEvent) => {
            event.preventDefault();
            setOpen(!isOpen());
          }}
        >
          {!isOpen() && <i class="icon i-iconoir:menu"></i>}
          {isOpen() && <i class="icon i-iconoir:xmark"></i>}
        </button>
      </div>
      <Transition name="fade">
        <Show when={isOpen()}>
          <nav>
            <ul>
              <For each={sidebarLinks}>
                {(link) => (
                  <li class="menu-item">
                    <a data-astro-prefetch="hover" href={link.url}>
                      <span class="menu-item-label font-mono">{link.label}</span>
                      <i class={'icon ' + link.icon} />
                    </a>
                  </li>
                )}
              </For>
            </ul>
          </nav>
        </Show>
      </Transition>
    </div>
  );
};

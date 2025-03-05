import './style.css';

export const Sidebar = () => {
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
      <button>
        <i class="icon icon-menu"></i>
      </button>

      <hr />
      <nav>
        <ul>
          {sidebarLinks.map((link) => (
            <li>
              <a href={link.url}>
                <span class="sidebar-tooltip">{link.label}</span>
                <i class={'icon ' + link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

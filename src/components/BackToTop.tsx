import { createSignal, createEffect, onCleanup, onMount, Show } from 'solid-js';
import { Transition } from 'solid-transition-group';

export const BackToTop = () => {
  const [shown, setShown] = createSignal(false);
  const [scrollPosition, setScrollPosition] = createSignal(0);

  const handleScroll = (event: Event) => {
    const target = event.target as Document;
    if (!target.scrollingElement) return;

    const scrollTop = target.scrollingElement.scrollTop;

    setScrollPosition(scrollTop);
  };

  onMount(async () => {
    document.addEventListener('scroll', handleScroll);
  });

  onCleanup(() => {
    document.removeEventListener('scroll', handleScroll);
  });

  createEffect(() => {
    if (scrollPosition() > 20 && !shown()) setShown(true);
    if (scrollPosition() <= 20 && shown()) setShown(false);
  });

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <Transition name="slide-up-fade">
      <Show when={shown()}>
        <button id="top-btn" classList={{ backToTop: true }} title="Scroll back to the top" onClick={handleClick}>
          <span class="icon i-iconoir:nav-arrow-up"></span>
        </button>
      </Show>
    </Transition>
  );
};

/* Oboro Research homepage carousel. No dependencies or build tools required. */
(() => {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('[data-slide]')];
  const selectors = [...carousel.querySelectorAll('[data-goto]')];
  const previous = carousel.querySelector('[data-prev]');
  const next = carousel.querySelector('[data-next]');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const INTERVAL_MS = 7000;
  let activeIndex = 0;
  let timerId = null;

  function showSlide(index) {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === activeIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
    selectors.forEach((button, i) => {
      const active = i === activeIndex;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }

  function pause() {
    if (timerId !== null) window.clearInterval(timerId);
    timerId = null;
  }

  function resume() {
    pause();
    if (!document.hidden && !motionPreference.matches && !carousel.matches(':hover') && !carousel.matches(':focus-within')) {
      timerId = window.setInterval(() => showSlide(activeIndex + 1), INTERVAL_MS);
    }
  }

  function navigate(index) {
    showSlide(index);
    resume();
  }

  previous.addEventListener('click', () => navigate(activeIndex - 1));
  next.addEventListener('click', () => navigate(activeIndex + 1));
  selectors.forEach((button) => button.addEventListener('click', () => navigate(Number(button.dataset.goto))));
  carousel.addEventListener('mouseenter', pause);
  carousel.addEventListener('mouseleave', resume);
  carousel.addEventListener('focusin', pause);
  carousel.addEventListener('focusout', () => window.requestAnimationFrame(resume));
  document.addEventListener('visibilitychange', resume);
  motionPreference.addEventListener?.('change', resume);
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      navigate(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });

  showSlide(0);
  resume();
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();

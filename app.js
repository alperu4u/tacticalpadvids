const filters = document.querySelectorAll('.filter');
const sections = document.querySelectorAll('.video-section');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    sections.forEach((section) => {
      section.hidden = selected !== 'all' && section.dataset.section !== selected;
      if (section.hidden) section.querySelectorAll('video').forEach((video) => video.pause());
    });
  });
});

document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

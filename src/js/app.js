document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const popover = document.querySelector('.popover-top');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (popover.classList.contains('hidden')) {
      popover.classList.remove('hidden');
      popover.classList.add('active');
    } else {
      popover.classList.remove('active');
      popover.classList.add('hidden');
    }
  });
});

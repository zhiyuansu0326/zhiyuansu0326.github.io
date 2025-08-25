document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.masthead__menu-item a');

  function activateNav() {
    let index = sections.length;
    // 根据滚动位置确定当前 section
    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.parentElement.classList.remove('active'));
    if (navLinks[index]) navLinks[index].parentElement.classList.add('active');
  }
  activateNav();
  window.addEventListener('scroll', activateNav);
});

// Add Mouseover event on nav menus
const navItems = document.querySelectorAll('nav a');
navItems.forEach(item =>
  item.addEventListener('mouseover', e => {
    e.target.classList.toggle('hovered');
  })
);
navItems.forEach(item =>
  item.addEventListener('mouseout', e => {
    e.target.classList.toggle('hovered');
  })
);

document.addEventListener('keydown', e => {});

document.addEventListener('wheel', e => {});

document.addEventListener('drag', e => {});

document.addEventListener('drop', e => {});

document.addEventListener('load', e => {});

document.addEventListener('focus', e => {});

document.addEventListener('resize', e => {});

document.addEventListener('scroll', e => {});

document.addEventListener('select', e => {});

document.addEventListener('dblclick', e => {});

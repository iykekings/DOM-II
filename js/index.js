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

// Display Pressed key on the page
document.addEventListener('keydown', e => {
  const float = document.getElementById('floating');
  float.textContent = e.code;
  float.style.display = 'block';
  float.style.color = '#ff7ca9';
  float.style.border = '3px solid #ff7ca9';
  setTimeout(() => {
    float.style.color = 'white';
    float.style.border = 'unset';
    float.style.display = 'none';
  }, 1000);
});

document.addEventListener('wheel', e => {});

document.addEventListener('drag', e => {});

document.addEventListener('drop', e => {});

document.addEventListener('load', e => {});

document.addEventListener('focus', e => {});

document.addEventListener('resize', e => {});

document.addEventListener('scroll', e => {});

document.addEventListener('select', e => {});

document.addEventListener('dblclick', e => {});

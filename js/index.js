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
  const float = document.querySelector('.floating.bottom-left');
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

document.addEventListener('wheel', e => {
  // console.log(e);
});

// Add custom border to header image on drag
const imgTarget = document.querySelector('.home .intro img');
imgTarget.addEventListener('drag', e => {
  e.target.style.border = 'solid #ffc600 5px';
});

// Add load event to header image
imgTarget.addEventListener('load', e => {
  alert('Image Loaded💖');
});

// Make input width grow on focus
document.querySelector('footer input').addEventListener('focus', e => {
  e.target.style.width = '50%';
});

// Show window size on resize
window.addEventListener('resize', e => {
  const float = document.querySelector('.floating.top-right');
  float.textContent = `Width: ${window.innerWidth}px`;
  float.style.display = 'block';
  float.style.color = '#33cc33';
  float.style.border = '3px solid #33cc33';
  setTimeout(() => {
    float.style.color = 'white';
    float.style.border = 'unset';
    float.style.display = 'none';
  }, 1000);
});

// Show scroll position on scroll
document.addEventListener('scroll', e => {
  const float = document.querySelector('.floating.top-right');
  float.textContent = `Scrolled position: ${window.scrollY}px`;
  float.style.display = 'block';
  float.style.color = '#ffc600';
  float.style.border = '3px solid #ffc600';
  setTimeout(() => {
    float.style.color = 'white';
    float.style.border = 'unset';
    float.style.display = 'none';
  }, 1000);
});

document.querySelectorAll('p').forEach(p =>
  p.addEventListener('select', e => {
    console.log(e);
  })
);

document.addEventListener('dblclick', e => {});

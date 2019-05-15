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
  popup('.floating.bottom-left', e.code, '#ff7ca9');
});

document.addEventListener('wheel', e => {
  popup('.floating.bottom-left', `DeltaY: ${e.deltaY}`, '#33cc33');
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
  popup('.floating.top-right', `Width: ${window.innerWidth}px`, '#33cc33');
});

// Show scroll position on scroll
document.addEventListener('scroll', e => {
  popup('.floating.top-right', `Scroll Position: ${window.scrollY}`, '#ffc600');
});

// Add select event to footer input field
document.querySelector('footer input').addEventListener('select', e => {
  const selection = e.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  alert(`You selected ${selection}`);
});

// grow the logo by 1.5 its size when dbclicked
document.querySelector('h1.logo-heading').addEventListener('dblclick', e => {
  e.target.style.fontSize = `${4 * 1.5}rem`;
});

function popup(selector, textSource, color) {
  const float = document.querySelector(selector);
  float.textContent = textSource;
  float.style.display = 'block';
  float.style.color = color;
  float.style.border = `3px solid ${color}`;
  setTimeout(() => {
    float.style.color = 'white';
    float.style.border = 'unset';
    float.style.display = 'none';
  }, 1000);
}

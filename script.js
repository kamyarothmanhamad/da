window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Adjust the value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const valueIcons = document.querySelectorAll('.value-icon');
  const textPath = document.querySelector('textPath');

  valueIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      const value = icon.getAttribute('data-value');
      textPath.textContent = `${value} • `.repeat(3);
      icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseleave', () => {
      textPath.textContent = 'پەروەردە • کۆمەڵگا • داهێنان • ';
      icon.style.transform = 'scale(1)';
    });
  });

  // Parallax effect
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (clientX - centerX) / 50;
    const moveY = (clientY - centerY) / 50;

    const svg = document.querySelector('.core-values-svg');
    svg.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${Date.now() / 100 % 360}deg)`;
  });
});

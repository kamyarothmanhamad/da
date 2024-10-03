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






document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.news-track');
  const items = document.querySelectorAll('.news-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const dotsContainer = document.querySelector('.news-dots');

  let currentIndex = 0;

  // Create dots
  items.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots[currentIndex].classList.remove('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    goToSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    goToSlide(currentIndex);
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const storyItems = document.querySelectorAll('.story-item');
  const prevButton = document.querySelector('.prev-story');
  const nextButton = document.querySelector('.next-story');
  let currentIndex = 0;

  function showStory(index) {
    storyItems.forEach(item => item.classList.remove('active'));
    storyItems[index].classList.add('active');
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + storyItems.length) % storyItems.length;
    showStory(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % storyItems.length;
    showStory(currentIndex);
  });

  // Auto-rotate stories
  setInterval(() => {
    currentIndex = (currentIndex + 1) % storyItems.length;
    showStory(currentIndex);
  }, 5000);
});





document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.projects-carousel');
  const cards = document.querySelectorAll('.project-card');
  const prevButton = document.querySelector('.prev-project');
  const nextButton = document.querySelector('.next-project');
  let currentIndex = 0;

  function showProject(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showProject(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showProject(currentIndex);
  });

  // Optional: Auto-rotate projects
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showProject(currentIndex);
  }, 7000);
});








document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-button');
  const projectCards = document.querySelectorAll('.project-card');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});



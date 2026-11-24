document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll state
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

  // Mobile burger menu
  const burger = document.getElementById('navBurger');
  const navMenu = document.getElementById('navMenu');
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('is-open'));
  });

  // Booking bar tabs (visual only)
  document.querySelectorAll('.booking-bar__tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.booking-bar__tabs button').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq__item').forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq__item').forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.faq__answer').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Gallery lightbox
  const galleryImgs = document.querySelectorAll('#galleryGrid img');
  if (galleryImgs.length) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,27,36,.92);display:none;align-items:center;justify-content:center;z-index:999;padding:24px;cursor:zoom-out;';
    const bigImg = document.createElement('img');
    bigImg.style.cssText = 'max-width:90vw;max-height:88vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.5);';
    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    galleryImgs.forEach(img => {
      img.addEventListener('click', () => {
        bigImg.src = img.src;
        overlay.style.display = 'flex';
      });
    });
    overlay.addEventListener('click', () => { overlay.style.display = 'none'; });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') overlay.style.display = 'none';
    });
  }
});

(function () {
  try {
    if (!window.gsap) return;

    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    gsap.from('.hero h1', {
      y: 24,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.hero-sub', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.1,
      ease: 'power3.out'
    });

    gsap.from('.hero-actions', {
      y: 16,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.media-frame', {
      y: 32,
      opacity: 0,
      duration: 1,
      delay: 0.25,
      ease: 'power3.out'
    });

    gsap.utils.toArray('.bento-item, .compare-card').forEach(function (el) {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%'
        },
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    });
  } catch (e) {
    /* Animations are optional */
  }
})();
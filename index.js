
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Skill bar animate on scroll
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.sk-fill').forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0%';
            requestAnimationFrame(() => {
              requestAnimationFrame(() => { bar.style.width = w; });
            });
          });
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const stackSection = document.querySelector('#stack');
    if (stackSection) skillObserver.observe(stackSection);

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            a.style.color = a.getAttribute('href') === '#' + entry.target.id
              ? 'var(--ink)' : '';
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(s => activeObserver.observe(s));

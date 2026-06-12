/* ── Hamburger ── */
      const hamburger = document.getElementById("hamburger");
      const mobileNav = document.getElementById("mobileNav");
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mobileNav.classList.toggle("open");
      });
      document.querySelectorAll(".mob-link").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("open");
          mobileNav.classList.remove("open");
        });
      });

      /* ── Scroll Progress Bar ── */
      const progressBar = document.getElementById("scrollProgress");
      function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrollTop / docHeight) * 100 + "%";
      }

      /* ── Auto-highlight Nav on Scroll ── */
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-ticker a[data-section]");
      function updateActiveNav() {
        const scrollY = window.scrollY + 100;
        let current = "home";
        sections.forEach((sec) => {
          if (sec.offsetTop <= scrollY) current = sec.id;
        });
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === current);
        });
      }

      /* ── Scroll Reveal ── */
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add("visible"), i * 90);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((el) => revealObserver.observe(el));

      /* ── Scroll Events ── */
      window.addEventListener(
        "scroll",
        () => {
          updateProgress();
          updateActiveNav();
        },
        { passive: true },
      );

      /* ── Contact Form ── */
      function handleSubmit(e) {
        e.preventDefault();
        const btn = e.target.querySelector(".btn-submit");
        btn.textContent = "Message Sent ✓";
        btn.style.background = "#4a9400";
        setTimeout(() => {
          btn.textContent = "Send Message →";
          btn.style.background = "";
          e.target.reset();
        }, 3000);
      }

      updateActiveNav();
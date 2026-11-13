/* ===========================================================
   JOSS GIANT — capa compartida: reproductor + animaciones
   =========================================================== */
(function () {
  "use strict";

  /* ---------- Reproductor (YouTube embebido) ---------- */
  let overlay, frame, titleEl, linkEl;

  function build() {
    overlay = document.createElement("div");
    overlay.className = "jg-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML =
      '<button class="jg-overlay__close" aria-label="Cerrar">' +
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      "</button>" +
      '<div class="jg-modal">' +
      '<div class="jg-modal__frame"><div class="jg-modal__ratio"></div></div>' +
      '<div class="jg-modal__foot">' +
      '<span class="jg-modal__tag">JOSS GIANT</span>' +
      '<h3 class="jg-modal__title"></h3>' +
      '<a class="jg-modal__link" target="_blank" rel="noopener">Ver en YouTube ↗</a>' +
      "</div></div>";
    document.body.appendChild(overlay);
    frame = overlay.querySelector(".jg-modal__ratio");
    titleEl = overlay.querySelector(".jg-modal__title");
    linkEl = overlay.querySelector(".jg-modal__link");
    overlay.querySelector(".jg-overlay__close").addEventListener("click", close);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
    });
  }

  function open(id, title) {
    if (!overlay) build();
    frame.innerHTML =
      '<iframe src="https://www.youtube.com/embed/' +
      id +
      '?autoplay=1&rel=0&modestbranding=1" title="' +
      (title || "Video") +
      '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    titleEl.textContent = title || "";
    linkEl.href = "https://www.youtube.com/watch?v=" + id;
    overlay.classList.add("is-open");
    document.documentElement.classList.add("jg-lock");
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.documentElement.classList.remove("jg-lock");
    setTimeout(function () {
      frame.innerHTML = "";
    }, 320);
  }

  window.JG = window.JG || {};
  window.JG.play = open;

  /* ---------- Aparición al hacer scroll ---------- */
  function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach(function (el, i) {
      el.style.setProperty("--d", (i % 6) * 60 + "ms");
      io.observe(el);
    });
  }

  /* ---------- Año dinámico ---------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initYear();
  });
})();

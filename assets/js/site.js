(function () {
  "use strict";

  var nav = document.getElementById("myLinks");
  var toggle = document.querySelector(".nav-toggle");

  function setNavigation(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("open", open);
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      setNavigation(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setNavigation(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setNavigation(false);
        toggle.focus();
      }
    });
  }

  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    var syncBackToTop = function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 320);
    };

    backToTop.addEventListener("click", function () {
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });

    syncBackToTop();
    window.addEventListener("scroll", syncBackToTop, { passive: true });
  }
})();

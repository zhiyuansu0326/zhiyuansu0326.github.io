(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var nav = document.getElementById("myLinks");
  var navBar = document.querySelector(".topnav");
  var toggle = document.querySelector(".nav-toggle");
  var backToTop = document.getElementById("back-to-top");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setNavigation(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    body.classList.toggle("nav-open", open);
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

    window.addEventListener("resize", function () {
      if (window.innerWidth > 800) setNavigation(false);
    });
  }

  function syncScrollState() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var scrollRange = document.documentElement.scrollHeight - window.innerHeight;
    var progress = scrollRange > 0 ? Math.min(100, Math.max(0, scrollTop / scrollRange * 100)) : 0;

    root.style.setProperty("--page-progress", progress + "%");
    if (navBar) navBar.classList.toggle("is-scrolled", scrollTop > 18);
    if (backToTop) backToTop.classList.toggle("is-visible", scrollTop > 420);
  }

  syncScrollState();
  window.addEventListener("scroll", syncScrollState, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  var revealItems = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -7%", threshold: 0.07 });

    revealItems.forEach(function (item) { revealObserver.observe(item); });
  }

  var qrModal = document.getElementById("qr-modal");
  var qrImage = document.getElementById("qr-modal-image");
  var qrTitle = document.getElementById("qr-modal-title");
  var qrClose = document.querySelector(".qr-modal-close");
  var qrTriggers = document.querySelectorAll(".social-qr-trigger");
  var activeQrTrigger = null;

  if (qrModal && qrImage && qrTitle && qrClose && qrTriggers.length) {
    qrTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var title = trigger.getAttribute("data-qr-title") || "QR Code";
        qrImage.src = trigger.getAttribute("data-qr-src");
        qrImage.alt = title + " QR code";
        qrTitle.textContent = title;
        activeQrTrigger = trigger;
        body.classList.add("qr-modal-open");
        qrModal.showModal();
      });
    });

    qrClose.addEventListener("click", function () { qrModal.close(); });
    qrModal.addEventListener("click", function (event) {
      if (event.target === qrModal) qrModal.close();
    });
    qrModal.addEventListener("close", function () {
      body.classList.remove("qr-modal-open");
      qrImage.removeAttribute("src");
      qrImage.alt = "";
      if (activeQrTrigger) activeQrTrigger.focus();
      activeQrTrigger = null;
    });
  }
})();

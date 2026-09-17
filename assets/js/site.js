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
        document.body.classList.add("qr-modal-open");
        qrModal.showModal();
      });
    });

    qrClose.addEventListener("click", function () {
      qrModal.close();
    });

    qrModal.addEventListener("click", function (event) {
      if (event.target === qrModal) qrModal.close();
    });

    qrModal.addEventListener("close", function () {
      document.body.classList.remove("qr-modal-open");
      qrImage.removeAttribute("src");
      qrImage.alt = "";
      if (activeQrTrigger) activeQrTrigger.focus();
      activeQrTrigger = null;
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

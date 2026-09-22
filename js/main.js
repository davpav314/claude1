(function () {
  "use strict";

  var revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) || revealEls.length === 0) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) { observer.observe(el); });
})();

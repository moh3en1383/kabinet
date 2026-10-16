/* استودیو آرکا — demo interactions.
   Everything here is client-side only; the contact form is a demo and
   never sends data anywhere. */
(function () {
  "use strict";

  /* Mobile navigation */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Footer year, Persian calendar and Persian digits, no separators */
  var year = document.querySelector("[data-year]");
  if (year) {
    try {
      var parts = new Intl.DateTimeFormat("fa-IR", { calendar: "persian" }).formatToParts(new Date());
      var yearPart = parts.filter(function (p) { return p.type === "year"; })[0];
      year.textContent = yearPart ? yearPart.value : String(new Date().getFullYear());
    } catch (e) {
      year.textContent = String(new Date().getFullYear());
    }
  }

  /* Portfolio filter (demo) */
  var filterBar = document.querySelector("[data-filter]");
  if (filterBar) {
    var items = document.querySelectorAll("[data-category]");
    filterBar.addEventListener("click", function (event) {
      var btn = event.target.closest("button[data-value]");
      if (!btn) return;

      Array.prototype.forEach.call(filterBar.querySelectorAll("button"), function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });

      var value = btn.getAttribute("data-value");
      Array.prototype.forEach.call(items, function (item) {
        item.hidden = value !== "all" && item.getAttribute("data-category") !== value;
      });
    });
  }

  /* Demo contact form */
  var form = document.querySelector("[data-demo-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var alertBox = form.querySelector("[data-form-alert]");
      if (alertBox) {
        alertBox.classList.add("is-visible");
        alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }
})();

/* ==========================================================================
   Mango Leche Flan — page behavior (index.html)
   1. Signature interaction: cup layers highlight in sequence with captions
   2. Product cards: click to select variant (classic/choco/sugar)
   3. Order form: live total (selected price × quantity)
   4. Demo submit: labeled demo, never fakes a real payment
   ========================================================================== */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. The layers as proof (signature interaction) ---------------- */

  var SEQUENCE = ["flan", "mango", "cream", "graham", "drizzle"];

  var CAPTIONS = {
    flan:    "Leche flan — the silky foundation",
    mango:   "Sliced mangoes — sweet carabao mango",
    cream:   "Cream — cold, light, the first touch",
    graham:  "Graham — the crunchy base",
    drizzle: "Drizzle — chocolate or melted sugar on top"
  };

  // caption dot color per layer, mirroring the layer colors
  var DOTS = {
    flan:    "#e8b04b",
    mango:   "#f2a024",
    cream:   "#fdf6e3",
    graham:  "#b07a3c",
    drizzle: "#e8c15a"
  };

  var cupLayers = document.querySelectorAll(".cup .layer");
  var rows = document.querySelectorAll(".layer-row");
  var captionText = document.getElementById("cupCaptionText");
  var captionDot = document.querySelector(".cup-caption-dot");

  function highlight(layerKey) {
    // cup layers
    cupLayers.forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-layer") === layerKey);
    });
    // menu rows
    rows.forEach(function (row) {
      row.classList.toggle("active", row.getAttribute("data-layer") === layerKey);
    });
    if (captionText && CAPTIONS[layerKey]) {
      captionText.textContent = CAPTIONS[layerKey];
    }
    if (captionDot && DOTS[layerKey]) {
      captionDot.style.background = DOTS[layerKey];
    }
  }

  function clearHighlight() {
    cupLayers.forEach(function (el) { el.classList.remove("active"); });
    rows.forEach(function (row) { row.classList.remove("active"); });
    if (captionText) {
      captionText.textContent = "Leche flan — the silky foundation";
    }
    if (captionDot) {
      captionDot.style.background = "#e8b04b";
    }
  }

  // a) hover/tap on the cup itself: highlight the layer under the pointer
  cupLayers.forEach(function (el) {
    el.addEventListener("pointerenter", function () {
      highlight(el.getAttribute("data-layer"));
    });
    el.addEventListener("pointerleave", clearHighlight);
  });

  // b) hover/focus on the menu rows: the diagram and the menu light up together
  rows.forEach(function (row) {
    row.addEventListener("pointerenter", function () {
      highlight(row.getAttribute("data-layer"));
    });
    row.addEventListener("pointerleave", clearHighlight);
    row.addEventListener("focusin", function () {
      highlight(row.getAttribute("data-layer"));
    });
    row.addEventListener("focusout", clearHighlight);
  });

  // c) the authored moment: on first scroll into view, run the sequence once
  //    flan → mango → cream → drizzle, like the cup being assembled
  var cupWrap = document.getElementById("cupInteractive");
  var sequenceRun = false;

  function runSequence() {
    if (sequenceRun) return;
    sequenceRun = true;

    if (reduceMotion) {
      // no motion: settle on the top layer, still telling the story
      highlight("flan");
      return;
    }

    var i = 0;
    var step = function () {
      if (i >= SEQUENCE.length) {
        setTimeout(clearHighlight, 900);
        return;
      }
      highlight(SEQUENCE[i]);
      i += 1;
      setTimeout(step, 600);
    };
    step();
  }

  if ("IntersectionObserver" in window && cupWrap) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runSequence();
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });
    observer.observe(cupWrap);
  }

  /* ---------- 2. Product cards selection (index.html) ----------------------- */

  var productCards = document.querySelectorAll(".product-card");
  var selectButtons = document.querySelectorAll(".btn-select");
  var selectedProductInput = document.getElementById("selectedProduct");
  var selectedPriceInput = document.getElementById("selectedPrice");
  var totalAmount = document.getElementById("totalAmount");
  var qtyInput = document.getElementById("qty");

  function updateSelection(productKey, price, name, desc) {
    // Update visual selection
    productCards.forEach(function (card) {
      card.classList.toggle("selected", card.getAttribute("data-product") === productKey);
    });
    // Update hidden form fields
    if (selectedProductInput) selectedProductInput.value = productKey;
    if (selectedPriceInput) selectedPriceInput.value = price;
    // Update total
    updateTotal();
  }

  selectButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var price = parseInt(btn.getAttribute("data-price"), 10);
      var name = btn.getAttribute("data-name");
      var desc = btn.getAttribute("data-desc");
      var productKey = btn.closest(".product-card").getAttribute("data-product");
      updateSelection(productKey, price, name, desc);
    });
    // Keyboard support
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  /* ---------- 3. Order form: live total ------------------------------------- */

  function updateTotal() {
    var price = parseInt(selectedPriceInput.value, 10) || 30;
    var qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    if (qty > 20) qty = 20;
    qtyInput.value = qty;
    if (totalAmount) {
      totalAmount.textContent = "₱" + (price * qty);
    }
  }

  qtyInput.addEventListener("input", updateTotal);
  updateTotal();

  /* ---------- 4. Demo submit — labeled demo, no fake payment ----------------- */

  var form = document.getElementById("orderForm");
  var status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // nothing is sent anywhere — this is the demo contract

    var qty = parseInt(qtyInput.value, 10);
    var cups = (isNaN(qty) || qty < 1) ? 1 : Math.min(qty, 20);

    var productKey = selectedProductInput.value;
    var price = parseInt(selectedPriceInput.value, 10);
    var total = "₱" + (price * cups);

    // Get product display name
    var names = {
      classic: "Classic",
      choco: "Chocolate Drizzle",
      sugar: "Melted Sugar Drizzle"
    };
    var kind = names[productKey] || "Classic";

    status.className = "form-status ok";
    status.textContent =
      "Demo only — nothing was ordered. " +
      (cups > 1 ? cups + " cups" : "1 cup") + " (" + kind + ", " + total + ") — " +
      "to actually get them, message us on socials.";
  });
})();
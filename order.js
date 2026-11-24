/* ==========================================================================
   Mango Leche Flan — Order page behavior
   1. Product from URL params
   2. Live total (price × quantity)
   3. Form validation (mobile number, required fields)
   4. Submit → store order in sessionStorage → redirect to thank-you.html
   ========================================================================== */

(function () {
  "use strict";

  // Product catalog
  var PRODUCTS = {
    classic: { name: "Classic", price: 30, desc: "Three layers, no drizzle" },
    choco:   { name: "Chocolate Drizzle", price: 35, desc: "Rich chocolate sauce over the flan" },
    sugar:   { name: "Melted Sugar Drizzle", price: 35, desc: "Caramelized melted sugar on top" }
  };

  // DOM elements
  var displayProduct = document.getElementById("displayProduct");
  var qtyInput = document.getElementById("qty");
  var totalAmount = document.getElementById("totalAmount");
  var form = document.getElementById("orderForm");
  var customerName = document.getElementById("customerName");
  var mobileNumber = document.getElementById("mobileNumber");
  var address = document.getElementById("address");
  var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

  // Parse URL for product
  function getProductFromURL() {
    var params = new URLSearchParams(window.location.search);
    return params.get("product") || "classic";
  }

  // Initialize product from URL
  var initialProduct = getProductFromURL();
  var product = PRODUCTS[initialProduct] || PRODUCTS.classic;
  displayProduct.value = product.name + " — ₱" + product.price;

  // Update total
  function updateTotal() {
    var price = product.price;
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

  // Validation helpers
  function validateMobile(num) {
    var cleaned = num.replace(/\s+/g, "");
    return /^09\d{9}$/.test(cleaned);
  }

  function validateForm() {
    var valid = true;

    // Basic validation - return false if key fields missing
    if (!customerName.value.trim()) {
      customerName.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      customerName.removeAttribute("aria-invalid");
    }

    if (!validateMobile(mobileNumber.value)) {
      mobileNumber.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      mobileNumber.removeAttribute("aria-invalid");
    }

    if (!address.value.trim()) {
      address.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      address.removeAttribute("aria-invalid");
    }

    if (!document.querySelector('input[name="paymentMethod"]:checked')) {
      valid = false;
    }

    return valid;
  }

  // Submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    var qty = parseInt(qtyInput.value, 10);
    var price = product.price;

    // Get selected payment
    var checkedPayment = form.querySelector('input[name="paymentMethod"]:checked');
    var paymentValue = checkedPayment ? checkedPayment.value : "cod";

    var order = {
      product: initialProduct,
      productName: product.name,
      price: price,
      quantity: qty,
      total: price * qty,
      customerName: customerName.value.trim(),
      mobileNumber: mobileNumber.value.trim().replace(/\s+/g, ""),
      address: address.value.trim(),
      paymentMethod: paymentValue,
      timestamp: new Date().toISOString()
    };

    // Store in sessionStorage
    try {
      sessionStorage.setItem("mangoLecheFlanOrder", JSON.stringify(order));
    } catch (err) {
      console.warn("sessionStorage unavailable", err);
    }

    // Redirect to thank you page
    window.location.href = "thank-you.html";
  });

})();
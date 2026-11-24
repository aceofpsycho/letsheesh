/* ==========================================================================
   Mango Leche Flan — Thank You page behavior
   1. Read order from sessionStorage
   2. Display order details
   3. Clear sessionStorage after display
   ========================================================================== */

(function () {
  "use strict";

  var receipt = document.getElementById("orderReceipt");

  function formatPrice(amount) {
    return "₱" + amount.toLocaleString();
  }

  function formatDate(isoString) {
    var date = new Date(isoString);
    return date.toLocaleDateString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function formatMobile(num) {
    // Format as 09XX XXX XXXX
    var cleaned = num.replace(/\D/g, "");
    if (cleaned.length === 11) {
      return cleaned.slice(0, 4) + " " + cleaned.slice(4, 7) + " " + cleaned.slice(7);
    }
    return num;
  }

  function getPaymentLabel(method) {
    if (method === "cod") {
      return '<span class="receipt-payment-icon">💵</span>Cash on Delivery';
    }
    return '<span class="receipt-payment-icon">📱</span>GCash';
  }

  // Read order from sessionStorage
  try {
    var orderJson = sessionStorage.getItem("mangoLecheFlanOrder");
    if (orderJson) {
      var order = JSON.parse(orderJson);

      // Clear after reading (so refresh doesn't show old order)
      sessionStorage.removeItem("mangoLecheFlanOrder");

      var html = "";
      html += '<div class="receipt-row"><span class="receipt-label">Order Number</span><span class="receipt-value">#' + Date.now().toString().slice(-6) + '</span></div>';
      html += '<div class="receipt-row"><span class="receipt-label">Date</span><span class="receipt-value">' + formatDate(order.timestamp) + '</span></div>';
      html += '<hr class="receipt-divider">';
      html += '<div class="receipt-row"><span class="receipt-label">Product</span><span class="receipt-value">' + order.productName + '</span></div>';
      html += '<div class="receipt-row"><span class="receipt-label">Quantity</span><span class="receipt-value">' + order.quantity + ' cup' + (order.quantity > 1 ? "s" : "") + '</span></div>';
      html += '<div class="receipt-row"><span class="receipt-label">Unit Price</span><span class="receipt-value">' + formatPrice(order.price) + '</span></div>';
      html += '<hr class="receipt-divider">';
      html += '<div class="receipt-row receipt-total"><span class="receipt-label">Total</span><span class="receipt-value">' + formatPrice(order.total) + '</span></div>';
      html += '<hr class="receipt-divider">';
      html += '<div class="receipt-row"><span class="receipt-label">Name</span><span class="receipt-value">' + order.customerName + '</span></div>';
      html += '<div class="receipt-row"><span class="receipt-label">Mobile</span><span class="receipt-value">' + formatMobile(order.mobileNumber) + '</span></div>';
      html += '<div class="receipt-row"><span class="receipt-label">Address</span><span class="receipt-value">' + order.address + '</span></div>';
      html += '<div class="receipt-row payment"><span class="receipt-label">Payment</span><span class="receipt-value">' + getPaymentLabel(order.paymentMethod) + '</span></div>';

      receipt.innerHTML = html;
    } else {
      receipt.innerHTML = '<p class="receipt-empty">No order details found. <a href="index.html#order">Place an order</a> to see your receipt here.</p>';
    }
  } catch (err) {
    console.warn("Failed to read order", err);
    receipt.innerHTML = '<p class="receipt-empty">Unable to load order details.</p>';
  }

})();
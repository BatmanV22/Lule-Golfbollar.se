// Get all quantity input fields and price span elements
const quantityInputs = document.querySelectorAll('input[type="number"]');
const priceSpans = document.querySelectorAll('span[id$="-price"]');
const totalPriceSpan = document.querySelector('#total-price');

// Define prices for each ball category
const prices = {
  "Bland bollar": 5,
  "Bland färgade bollar": 8,
  "Taylormade TP5": 10,
  "Titleist Pro V1": 14,
  "Bland Titleist": 12,
  "Bland Callaway": 8,
  "Callaway Chrome Soft": 10
};

// Add event listener to each quantity input field
quantityInputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const quantity = parseInt(e.target.value);
    const ballCategory = e.target.closest('.ball-category');
    const price = prices[ballCategory.querySelector('h3').textContent];

    let totalPrice = 0;
    if (quantity > 0 && price) {
      totalPrice = price * quantity;
    }

    const priceSpan = ballCategory.querySelector(`span[id$="-price"]`);
    priceSpan.textContent = `${totalPrice} kr`;

    // Update total price
    totalPriceSpan.textContent = `${totalPrice} kr`;
  });

  // Add event listener to calculate total price when page loads
  input.dispatchEvent(new Event('input'));
});
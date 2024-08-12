const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
// Get the rating elements
let stars = document.querySelectorAll('.star');

// Add event listener to each star
stars.forEach((star) => {
  star.addEventListener('click', () => {
    // Get the rating value
    let rating = star.getAttribute('data-rating');
    
    // Save the rating (e.g., to a database or Local Storage)
    saveRating(rating);
    
    // Update the rating display
    updateRatingDisplay(rating);
  });
});

// Save the rating
function saveRating(rating) {
  // Replace with your own implementation
  console.log(`Rating saved: ${rating}`);
}

// Update the rating display
function updateRatingDisplay(rating) {
  // Replace with your own implementation
  document.querySelector('.rating-display').innerHTML = `Rating: ${rating}/5`;
}
// Buy Now button click event
document.getElementById("buy-now").addEventListener("click", function() {
  window.location.href = "address.html";
});

// Address form next button click event
document.getElementById("next-button").addEventListener("click", function() {
  window.location.href = "payment.html";
});

// Payment form place order button click event
document.getElementById("place-order-button").addEventListener("click", function() {
  window.location.href = "order-success.html";
});








document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("thankYouMsg").textContent = "Thanks for contacting us!";
  this.reset();
});

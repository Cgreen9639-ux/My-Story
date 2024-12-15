// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


document.getElementById("questions-btn").addEventListener("click", function() {
    var dropdown = document.getElementById("questions-dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
});

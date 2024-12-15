document.addEventListener("DOMContentLoaded", function() {  
    const mobileMenu = document.getElementById("mobile-menu");  
    const navLinks = document.getElementById("nav-links");  

    mobileMenu.addEventListener("click", function() {  
        navLinks.classList.toggle("active");  
        mobileMenu.classList.toggle("active");  
    });  

    // Button click event for questions (you can customize this functionality)  
    const questionsButton = document.getElementById("questions-btn");  
    questionsButton.addEventListener("click", function() {  
        alert("Feel free to ask your questions!");  
    });  
});

// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/data', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send('Data received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

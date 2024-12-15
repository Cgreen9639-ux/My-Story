document.addEventListener("DOMContentLoaded", () => {  
    const mobileMenu = document.getElementById("mobile-menu") as HTMLElement | null;  // Type assertion  
    const navLinks = document.getElementById("nav-links") as HTMLElement | null;   // Type assertion  

    if (mobileMenu && navLinks) {  // Ensure elements exist  
        mobileMenu.addEventListener("click", () => {  
            navLinks.classList.toggle("active");  
            mobileMenu.classList.toggle("active");  
        });  
    }  

    // Button click event for questions  
    const questionsButton = document.getElementById("questions-btn") as HTMLButtonElement | null;  // Type assertion  
    if (questionsButton) { // Ensure the button exists  
        questionsButton.addEventListener("click", () => {  
            alert("Feel free to ask your questions!");  
        });  
    }  
});
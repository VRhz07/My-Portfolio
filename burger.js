document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById("mobile-menu")
    const navMenu = document.querySelector(".nav-menu")
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      // Toggle between hamburger and X icon
      const icon = menuToggle.querySelector("i")
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
        document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
        document.body.style.overflow = ""; // Allow scrolling when menu is closed
      }
    })
  
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest("nav") && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        const icon = menuToggle.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
        document.body.style.overflow = ""; // Allow scrolling again
      }
    })
    
    // Close menu when scrolling starts
    window.addEventListener("scroll", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        const icon = menuToggle.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
        document.body.style.overflow = ""; // Allow scrolling again
      }
    })
  })
  
  
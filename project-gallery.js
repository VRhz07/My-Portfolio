document.addEventListener("DOMContentLoaded", () => {
    // Get all project items
    const projectItems = document.querySelectorAll(".photo-item")
  
    // Add click event listener to each project item
    projectItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Toggle active class on the clicked item
        this.classList.toggle("active")
  
        // If this item was activated, deactivate all others
        if (this.classList.contains("active")) {
          projectItems.forEach((otherItem) => {
            if (otherItem !== this) {
              otherItem.classList.remove("active")
            }
          })
        }
      })
    })
  
    // Close captions when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".photo-item")) {
        projectItems.forEach((item) => {
          item.classList.remove("active")
        })
      }
    })
  })
  
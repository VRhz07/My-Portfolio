document.addEventListener("DOMContentLoaded", () => {
    const fullscreenContainer = document.getElementById("fullscreen-container");
    const fullscreenImage = document.getElementById("fullscreen-image");
    const fullscreenCaption = document.getElementById("fullscreen-caption");
    const closeFullscreen = document.getElementById("close-fullscreen");
    const images = document.querySelectorAll(".fullscreen-img");

    images.forEach((img) => {
        img.addEventListener("click", function () {
            console.log("Clicked image src:", this.src); // Debugging
            fullscreenImage.src = this.src;
            fullscreenImage.alt = this.alt;

            // Get caption safely
            const caption = this.closest(".art-item")?.querySelector(".overlay");
            if (caption) {
                const title = caption.querySelector("h3")?.textContent || "";
                const description = caption.querySelector("p")?.textContent || "";
                fullscreenCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
            } else {
                fullscreenCaption.innerHTML = "";
            }

            fullscreenContainer.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    });

    function closeFullscreenView() {
        fullscreenContainer.classList.remove("active");
        document.body.style.overflow = ""; // Restore scrolling
    }

    closeFullscreen.addEventListener("click", closeFullscreenView);
    
    fullscreenContainer.addEventListener("click", (e) => {
        if (e.target === fullscreenContainer) {
            closeFullscreenView();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeFullscreenView();
        }
    });
});

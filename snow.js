const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Update canvas size on resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Snowflake properties
const snowflakes = [];
const numFlakes = 100; // Number of snowflakes

class Snowflake {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.radius = Math.random() * 4 + 1; // Snowflake size
        this.speed = Math.random() * 3 + 1; // Fall speed
        this.wind = Math.random() * 1 - 0.5; // Wind effect (left/right movement)
    }

    fall() {
        this.y += this.speed;
        this.x += this.wind; // Slight movement left/right

        if (this.y > canvas.height) {
            this.reset(); // Reset snowflake when it reaches the bottom
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create snowflakes
for (let i = 0; i < numFlakes; i++) {
    snowflakes.push(new Snowflake());
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let flake of snowflakes) {
        flake.fall();
        flake.draw();
    }

    requestAnimationFrame(animate);
}

// Start animation
animate();

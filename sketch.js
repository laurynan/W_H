let pixel;

function setup() {
    createCanvas(windowWidth, windowHeight); // Fullscreen canvas
    background(0);
    noCursor(); // Hide default cursor

    // Create the floating pixel (square)
    pixel = new Particle(mouseX, mouseY);
}

function draw() {
    background(0, 20); // Faint fade effect

    // Update pixel position to follow the mouse smoothly
    pixel.followMouse();
    pixel.update();
    pixel.show();
}

// Resize canvas dynamically if the window size changes
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0); // Prevents canvas distortion on resize
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-0.3, 0.3);
        this.vy = random(-0.3, 0.3);
        this.size = 6; // Size of the square
    }

    followMouse() {
        // Make square follow the mouse smoothly
        this.x = lerp(this.x, mouseX, 0.1);
        this.y = lerp(this.y, mouseY, 0.1);
    }

    update() {
        // Slight random movement (vacuum effect)
        this.x += this.vx;
        this.y += this.vy;

        // Keep square inside canvas bounds
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    show() {
        noStroke();
        fill(255);
        rectMode(CENTER); // Center the square on (x, y)
        rect(this.x, this.y, this.size, this.size);
    }
}

// game.js

// Setup canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game variables
let isRunning = true;

// Main game loop
function gameLoop() {
    // Clear the canvas for every frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Call update and render functions
    update();
    render();

    // Continue the loop if the game is running
    if (isRunning) {
        requestAnimationFrame(gameLoop);
    }
}

// Update game state
function update() {
    // Game logic goes here (e.g., player movement, mining simulation)
}

// Render the game
function render() {
    // Draw objects here (e.g., the player, environment, resources)
}

// Start the game loop
gameLoop();

// game.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Test to fill canvas with a color
ctx.fillStyle = '#0000FF';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Game variables
let isRunning = true;

// World grid (for simplicity, using a 10x10 grid)
let world = [
    [0, 1, 0, 0, 1, 2, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 2, 0, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    // ...
];

// Tile types
const TILE_SIZE = 64;
const TILE_EMPTY = 0;
const TILE_STONE = 1;
const TILE_ORE = 2;

// Player object
let player = {
    x: 0,
    y: 0,
    size: TILE_SIZE,
    color: '#00f'
};

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    render();

    if (isRunning) {
        requestAnimationFrame(gameLoop);
    }
}

// Update function
function update() {
    // Game logic goes here
}

// Render function
function render() {
    renderWorld();
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x * TILE_SIZE, player.y * TILE_SIZE, player.size, player.size);
}

// Render the world grid
function renderWorld() {
    for (let y = 0; y < world.length; y++) {
        for (let x = 0; x < world[y].length; x++) {
            let tile = world[y][x];
            switch (tile) {
                case TILE_EMPTY:
                    ctx.fillStyle = '#777';
                    break;
                case TILE_STONE:
                    ctx.fillStyle = '#555';
                    break;
                case TILE_ORE:
                    ctx.fillStyle = '#b8860b';
                    break;
            }
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
}

// Player movement and mining
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
        case 'Space':
            mine();
            break;
    }
});

function movePlayer(dx, dy) {
    let newX = player.x + dx;
    let newY = player.y + dy;

    if (newX >= 0 && newX < world[0].length && newY >= 0 && newY < world.length) {
        player.x = newX;
        player.y = newY;
    }
}

function mine() {
    let currentTile = world[player.y][player.x];
    if (currentTile === TILE_STONE || currentTile === TILE_ORE) {
        world[player.y][player.x] = TILE_EMPTY;
    }
}

gameLoop();

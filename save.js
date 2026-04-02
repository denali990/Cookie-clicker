// save.js

// Function to save the game state to localStorage
function saveGame(gameState) {
    localStorage.setItem('cookieClickerGame', JSON.stringify(gameState));
}

// Function to load the game state from localStorage
function loadGame() {
    const savedState = localStorage.getItem('cookieClickerGame');
    return savedState ? JSON.parse(savedState) : null;
}

// Automatically save the game state every 5 seconds
setInterval(() => {
    const gameState = { /* retrieve your current game state here */ };
    saveGame(gameState);
}, 5000);

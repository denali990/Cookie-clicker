function spawnGoldenCookie() {
    // Function to create golden cookies  
    const goldenCookie = document.createElement('div');
    goldenCookie.className = 'golden-cookie';
    goldenCookie.innerText = 'Golden Cookie!';
    document.body.appendChild(goldenCookie);

    // Set a timer to remove the cookie after 8 seconds
    setTimeout(() => {
        goldenCookie.remove();
    }, 8000);
}

// Spawn a golden cookie every 30 seconds
setInterval(spawnGoldenCookie, 30000);
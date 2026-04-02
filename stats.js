function updateStats(cookies, totalCPS) {
    const statsContainer = document.getElementById('stats');
    statsContainer.innerHTML = `Cookies: ${cookies} <br>Total CPS: ${totalCPS}`;
}
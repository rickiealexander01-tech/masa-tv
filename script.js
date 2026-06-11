const juegos = [
    { time: "7:00 PM", icon: "⚽", title: "Chiringuito de jugones", servidores: [{nombre: "Opción 1", url: "URL1"},] },
];

document.addEventListener('DOMContentLoaded', () => {
    const listDiv = document.getElementById('game-list');
    juegos.forEach(juego => {
        const container = document.createElement('div');
        container.className = 'game-container';
        container.innerHTML = `
            <div class="game-header" onclick="toggleOptions(this)">
                <span style="color:#ffcc00; margin-right:15px; font-weight:bold;">${juego.time}</span>
                <span>${juego.icon} ${juego.title}</span>
            </div>
            <div class="options-panel"></div>
        `;
        const panel = container.querySelector('.options-panel');
        juego.servidores.forEach(srv => {
            const btn = document.createElement('button');
            btn.className = 'server-btn';
            btn.innerText = srv.nombre;
            btn.onclick = () => window.open(`player.html?url=${encodeURIComponent(srv.url)}&title=${encodeURIComponent(juego.title)}`, '_blank', 'width=1000,height=600');
            panel.appendChild(btn);
        });
        listDiv.appendChild(container);
    });
});

function toggleOptions(el) {
    const panel = el.nextElementSibling;
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
}
// Prueba esto en tu script.js
{ 
    time: "Ahora", 
    icon: "🔴", 
    title: "Mi Transmisión en Vivo", 
    servidores: [ 
        { nombre: "Ver en Kick", url: "https://kick.com/rickey-dominicanobarca" } 
    ] 
}

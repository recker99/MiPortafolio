// Inicializa el mapa
var map = L.map('map').setView([-33.45694, -70.71461], 13); // Santiago, Chile

// Añade un tile layer de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agrega un marcador
var marker = L.marker([-33.45694, -70.71461]).addTo(map);
marker.bindPopup("<b>Santiago</b><br>Chile").openPopup();


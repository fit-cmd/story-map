// Initialize the map
const map = L.map('map').setView([0, 0], 2);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define your event-based data (example data)
const events = [
    {
        lat: 37.7749,
        lng: -122.4194,
        title: 'Event 1',
        description: 'Description for Event 1'
    },
    {
        lat: 34.0522,
        lng: -118.2437,
        title: 'Event 2',
        description: 'Description for Event 2'
    },
    // Add more events here
];

// Add markers for each event
events.forEach(event => {
    const marker = L.marker([event.lat, event.lng]).addTo(map);
    marker.bindPopup(`<strong>${event.title}</strong><br>${event.description}`);
});

document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.querySelector("gmp-map");

    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            center: { lat: 38.0236514643697, lng: 23.870650832928252 }, // Map center
            zoom: 10,
            mapId: "YOUR_MAP_ID",
        });

        // Custom marker icon (local file)
        const customIcon = {
            url: "/images/marker1.png", // Ensure this path is correct
            scaledSize: new google.maps.Size(40, 40), // Resize the marker (adjust as needed)
        };

        const customIcon2 = {
            url: "/images/marker2.png", // Ensure this path is correct
            scaledSize: new google.maps.Size(40, 40), // Resize the marker (adjust as needed)
        };

        // Add marker
        const marker = new google.maps.Marker({
            position: { lat: 37.98518481729825, lng: 23.720057943743175 }, // Marker position
            map: map,
            title: "Red Dead Location",
            icon: customIcon, // Use the custom marker image
            draggable: false, // Prevent marker from being moved
        });

        const marker2 = new google.maps.Marker({
            position: { lat: 37.96175616777757, lng: 23.797574638592383 }, // Marker position
            map: map,
            title: "Red Dead Location",
            icon: customIcon2, // Use the custom marker image
            draggable: false, // Prevent marker from being moved
        });
        

        // Info window on click
        const infoWindow = new google.maps.InfoWindow({
            content: "<h3>Red Dead World</h3><p>Explore the Wild West!</p>",
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    }
});


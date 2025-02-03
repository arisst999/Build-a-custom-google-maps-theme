document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.querySelector("gmp-map");

    if (mapElement) {
        const map = mapElement.innerMap; // Get the initialized map

        // Custom marker icons
        const customIcon = {
            url: "/images/marker1.png", // Ensure the correct path
            scaledSize: new google.maps.Size(40, 40), // Resize marker
        };

        const customIcon2 = {
            url: "/images/marker2.png",
            scaledSize: new google.maps.Size(40, 40),
        };

        const customIcon3 = {
            url: "/images/marker3.png",
            scaledSize: new google.maps.Size(40, 40),
        };

        // Add first marker
        const marker1 = new google.maps.Marker({
            position: { lat: 37.98518481729825, lng: 23.720057943743175 }, // First marker position
            map: map,
            title: "Red Dead Location 1",
            icon: customIcon,
            draggable: false,
        });

        // Add second marker
        const marker2 = new google.maps.Marker({
            position: { lat:  38.09865142287997, lng: 23.92903970729088 }, // Second marker position
            map: map,
            title: "Red Dead Location 2",
            icon: customIcon2,
            draggable: false,
        });
        
        const marker3 = new google.maps.Marker({
            position: { lat:   38.15558184136182, lng: 23.718897084900696 }, // Second marker position
            map: map,
            title: "Red Dead Location 2",
            icon: customIcon3,
            draggable: false,
        });
        
    }
});


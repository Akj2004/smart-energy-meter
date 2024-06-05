document.addEventListener("DOMContentLoaded", function() {
    // Sidebar menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const sidebarMenu = document.getElementById("sidebarMenu");

    menuToggle.addEventListener("click", function(event) {
        sidebarMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        if (sidebarMenu.classList.contains("active") && !sidebarMenu.contains(event.target) && event.target !== menuToggle) {
            sidebarMenu.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeIcon = document.getElementById("darkModeIcon");

    darkModeToggle.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeIcon.src = "sun.png";
        } else {
            darkModeIcon.src = "moon.png";
        }
    });

    // Function to fetch and display real-time energy data
    function fetchEnergyData() {
        // Mock data for demonstration (replace with actual API request)
        const mockData = {
            power: 1200, // Current power consumption in watts
            voltage: 230, // Voltage in volts
        };

        // Update energyData section with received data
        const energyDataSection = document.getElementById("energyData");
        energyDataSection.innerHTML = `
            <h2>Real-time Energy Data</h2>
            <p>Current Power Consumption: ${mockData.power} W</p>
            <p>Voltage: ${mockData.voltage} V</p>
        `;
    }

    // Initial call to fetchEnergyData
    fetchEnergyData();

    // Set interval to fetch and update energy data every 5 seconds
    setInterval(fetchEnergyData, 5000);

    // Appliance control buttons
    const applianceButtons = document.querySelectorAll(".appliance-buttons button");
    applianceButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (button.classList.contains("off")) {
                button.classList.remove("off");
                button.classList.add("on");
                button.style.backgroundColor = "#004080";
                button.style.color = "#fff"; // Text color when on
            } else {
                button.classList.remove("on");
                button.classList.add("off");
                button.style.backgroundColor = "#ccc";
                button.style.color = "#000"; // Text color when off
            }
        });
    });

    // Set threshold button
    document.getElementById("setThreshold").addEventListener("click", function() {
        const threshold = document.getElementById("threshold").value;
        console.log("Threshold set to:", threshold);
    });
});


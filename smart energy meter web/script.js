document.addEventListener("DOMContentLoaded", function() {
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

    // Event listeners for appliance control buttons
    document.getElementById("toggleLight").addEventListener("click", function() {
        // Mock action for demonstration
        console.log("Light toggled");
    });

    document.getElementById("toggleFan").addEventListener("click", function() {
        // Mock action for demonstration
        console.log("Fan toggled");
    });

    document.getElementById("toggleAC").addEventListener("click", function() {
        // Mock action for demonstration
        console.log("AC toggled");
    });

    // Event listener for setting power threshold
    document.getElementById("setThreshold").addEventListener("click", function() {
        // Get user input
        const threshold = document.getElementById("threshold").value;

        // Mock action for demonstration
        console.log("Threshold set to:", threshold);
    });
});

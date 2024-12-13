const clockElement = document.getElementById("clock");

// Fetch time from timeapi.io for UTC+1
async function fetchTime() {
    try {
        const response = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Europe/Berlin");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const serverTime = new Date(data.dateTime); // Parse the ISO string
        startClock(serverTime);
    } catch (error) {
        console.error("Failed to fetch time:", error);
        clockElement.textContent = "Error fetching time.";
    }
}

// Start the clock
function startClock(initialTime) {
    let currentTime = initialTime.getTime();

    // Update the clock every second
    setInterval(() => {
        currentTime += 1000; // Increment by one second
        const date = new Date(currentTime);
        
        // Format the time for Europe/Berlin time zone
        const timeString = date.toLocaleTimeString("en-GB", { 
            timeZone: "Europe/Berlin", 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit" 
        });

        clockElement.textContent = timeString;
    }, 1000);
}

// Initialize the clock
fetchTime();

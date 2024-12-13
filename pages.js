function showSection(sectionId) {
    // Hide all sections
    document.getElementById("historie-text").style.display = "none";
    document.getElementById("druhy-text").style.display = "none";
    document.getElementById("vyvoj-text").style.display = "none";

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";

    // Hide buttons and overlay text
    document.querySelector(".buttons").style.display = "none";
    document.querySelector("#overlay-text").style.display = "none";

    // Show the reset button
    document.getElementById("reset-button").style.display = "block";
}

function resetView() {
    // Hide all sections
    document.getElementById("historie-text").style.display = "none";
    document.getElementById("druhy-text").style.display = "none";
    document.getElementById("vyvoj-text").style.display = "none";

    // Show the overlay text and buttons
    document.querySelector(".buttons").style.display = "flex"; // Use 'flex' for inline button layout
    document.querySelector("#overlay-text").style.display = "block";

    // Hide the reset button
    document.getElementById("reset-button").style.display = "none";
}


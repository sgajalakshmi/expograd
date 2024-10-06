// Function to update the planet description based on user inputs
function updatePlanet() {
    // Get the values from the inputs
    const planetType = document.getElementById("planet-type").value;
    const planetSize = document.getElementById("planet-size").value;
    const distanceStar = document.getElementById("distance-star").value;
    const atmosphere = document.getElementById("atmosphere").value;

    // Display the slider values dynamically
    document.getElementById("size-value").textContent = planetSize;
    document.getElementById("distance-value").textContent = distanceStar;

    // Generate a planet description based on the inputs
    let description = `You have created a ${planetType} planet. `;
    description += `It is ${planetSize} times the size of Earth and located ${distanceStar} AU from its star. `;
    
    if (atmosphere) {
        description += `Its atmosphere is composed of ${atmosphere}.`;
    } else {
        description += "The atmosphere is unknown.";
    }

    // Display the description in the output section
    document.getElementById("planet-description").textContent = description;
}

// Initial function call to set the description based on default values
updatePlanet();

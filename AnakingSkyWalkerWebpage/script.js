let lightsaberActive = false; // Track whether the lightsaber is active or sheathed

function toggleLightsaber() {
  const blade = document.querySelector(".blade");

  if (lightsaberActive) {
    // Sheathe the lightsaber (set height to 0)
    blade.style.height = "0";
    lightsaberActive = false; // Update state
  } else {
    // Activate the lightsaber (set height to full length)
    blade.style.height = "200px"; // Adjust height as needed
    lightsaberActive = true; // Update state
  }
}

function changeBladeColor(color) {
  const blade = document.querySelector(".blade");
  const notification = document.getElementById("notification");

  // Check if the lightsaber is active
  if (!lightsaberActive) {
    // Show the notification
    notification.textContent = "Please activate the lightsaber first!";
    notification.style.display = "block"; // Ensure it's visible
    notification.style.opacity = "1"; // Make it fully visible

    // Fade out after 2 seconds
    setTimeout(() => {
      notification.style.opacity = "0"; // Fade out
      setTimeout(() => {
        notification.style.display = "none"; // Hide after fade-out completes
      }, 1000); // Match the CSS transition duration
    }, 2000); // Show the notification for 2 seconds
    return; // Exit the function without changing the color
  }

  // Update the blade color dynamically
  blade.style.setProperty("--blade-color", color);
}

/*Lightsaber duel*/

const redSaber = document.querySelector(".lightsaber.red");
const blueSaber = document.querySelector(".lightsaber.blue");
const clashEffect = document.querySelector(".clash");

// Random movement logic
function moveSaber(saber) {
  const x = Math.random() * 80 + 10; // Horizontal movement
  const y = Math.random() * 80 + 10; // Vertical movement
  saber.style.transform = `translate(${x}%, ${y}%)`;
}

// Clash effect logic
function clash() {
  // Get the midpoints of the sabers
  const redRect = redSaber.getBoundingClientRect();
  const blueRect = blueSaber.getBoundingClientRect();

  const clashX = (redRect.left + blueRect.left) / 2;
  const clashY = (redRect.top + blueRect.top) / 2;

  clashEffect.style.left = `${clashX}px`;
  clashEffect.style.top = `${clashY}px`;
  clashEffect.style.opacity = 1;

  // Fade the clash effect after animation
  setTimeout(() => (clashEffect.style.opacity = 0), 300);
}

// Animate the duel
function animateDuel() {
  moveSaber(redSaber);
  moveSaber(blueSaber);
  clash();
}

// Start the animation
setInterval(animateDuel, 1000);

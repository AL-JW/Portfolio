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

function toggleMobileMenu() {
  const navLinks = document.querySelector(".mobile-nav-links");
  navLinks.classList.toggle("show");
}

/* Toggle for column dropdowns*/

function toggleContent(index) {
  // Check if screen size is mobile (768px or smaller)
  if (window.innerWidth > 768) {
    return; // Do nothing if it's desktop
  }

  const contents = document.querySelectorAll(".column-content");
  const selectedContent = contents[index];

  // If the content is already expanded, collapse it
  if (selectedContent.classList.contains("active")) {
    selectedContent.style.maxHeight = null; // Collapse the content
    selectedContent.classList.remove("active");
  } else {
    // Collapse all other columns
    contents.forEach((content) => {
      content.style.maxHeight = null;
      content.classList.remove("active");
    });

    // Expand the selected column
    selectedContent.style.maxHeight = selectedContent.scrollHeight + "px";
    selectedContent.classList.add("active");
  }
}

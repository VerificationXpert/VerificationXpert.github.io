// Function to load and insert the sidebar content
function loadSidebar() {
    const sidebarContainer = document.getElementById("sidebar-container");

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define the method, URL, and async flag
    xhr.open("GET", "sidebar.html", true);

    // Set up an event handler for when the request is complete
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Insert the loaded sidebar content into the container
            sidebarContainer.innerHTML = xhr.responseText;
        }
    };

    // Send the request
    xhr.send();
}

// Call the loadSidebar function when the page loads
window.onload = loadSidebar;

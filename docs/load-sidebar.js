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



// Get a reference to the footer element
const footer = document.getElementById('page-footer');

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
    // Calculate the distance from the top of the document to the bottom of the page
    const pageHeight = document.documentElement.scrollHeight;
    // Calculate the current scroll position of the window
    const scrollPosition = window.scrollY + window.innerHeight;

    // Check if the user has scrolled to the bottom of the page
    if (scrollPosition >= pageHeight) {
        // If they have, make the footer visible
        footer.classList.remove('hidden');
    } else {
        // If not, hide the footer
        footer.classList.add('hidden');
    }
});

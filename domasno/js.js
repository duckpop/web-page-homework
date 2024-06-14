document.addEventListener('DOMContentLoaded', function () {
    // Debugging: Log a message to confirm the script is running
    console.log('DOM fully loaded and parsed');

    // Function to check if the user is on the page any link is pointing to
    function checkIfOnLinkedPage() {
        // Get the current page URL
        var currentUrl = window.location.href;
        console.log('Current URL:', currentUrl); // Debugging: Log the current URL

        // Get all links on the page
        var links = document.querySelectorAll('a');

        // Loop through all the links
        links.forEach(function(link) {
            var linkUrl = link.href;
            console.log('Checking link URL:', linkUrl); // Debugging: Log the link's URL

            // Compare the current URL with the link's URL
            if (currentUrl === linkUrl) {
                console.log('User is on the linked page:', linkUrl);
                // Add the "OnPage" class to the link
                link.classList.add('OnPage');
            } else {
                console.log('User is not on the linked page:', linkUrl);
            }
        });
    }
    // Call the function to check the links
    checkIfOnLinkedPage();
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the checkbox
    var checkbox = document.getElementById('switcher');

    // Get all elements with class span1 and span2
    var span1Elements = document.querySelectorAll('.span1');
    // Function to toggle the hidden class for all elements
    function toggleSpans() {
        span1Elements.forEach(function(span1) {
            var span2 = span1.nextElementSibling; // Assuming span2 is immediately after span1
            if (checkbox.checked) {
                span1.classList.add('hidden');
                span2.classList.remove('hidden');
            } else {
                span1.classList.remove('hidden');
                span2.classList.add('hidden');
            }
        });
        // Save the checkbox state in local storage
        localStorage.setItem('checkboxState', checkbox.checked);
    }

    // Check if there is a saved state in local storage
    var savedState = localStorage.getItem('checkboxState');
    if (savedState !== null) {
        checkbox.checked = JSON.parse(savedState);
        toggleSpans(); // Apply the saved state
    }

    // Add event listener to the checkbox
    checkbox.addEventListener('change', toggleSpans);
});

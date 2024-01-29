$(document).ready(function() {
    // Get the trip name from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const tripName = urlParams.get('trip');

    // Set the value of the trip dropdown to the trip name obtained from the URL
    if (tripName) {
        const tripDropdown = $('#trip');
        const existingOption = tripDropdown.find(`option[value="${tripName}"]`);

        if (existingOption.length === 0) {
            // If the option doesn't exist, dynamically add it to the dropdown
            tripDropdown.append(`<option value="${tripName}">${tripName}</option>`);
        }

        // Set the dropdown value
        tripDropdown.val(tripName);
    }
});

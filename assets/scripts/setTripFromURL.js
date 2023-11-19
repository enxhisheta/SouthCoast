$(document).ready(function() {
    // Get the trip name from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const tripName = urlParams.get('trip');

    // Set the value of the trip dropdown to the trip name obtained from the URL
    if (tripName) {
        $('#trip').val(tripName);
    }
});

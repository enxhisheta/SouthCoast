$(document).ready(function () {
    var trips = [];

    const settings = {
        async: true,
        crossDomain: true,
        url: 'http://localhost:5112/api/BookTrips/',
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    };

    $.ajax(settings).done(function (_trips) {
        trips = _trips;
        console.log('trips = ', trips);
        createTourCard();
    });

    function createTourCard() {
        const TourCards = $("#tour-cards");
        TourCards.empty();

        $.each(trips, function(index, trip) {
            console.log('trip = ', trip);
            const tourCard = `
                <div class="card">
                    <div trip-id="${trip.id}" class="tour-info">
                        <h2>${trip.tripName}</h2>
                        <p>Meeting point: ${trip.meetingPoint}</p>
                        <p>We visit: ${trip.weVisit}</p>
                        <p>Departure: ${trip.departure}</p>
                        <p>Price: ${trip.price}</p>
                        </div>
                        <button class="book-now-button" data-trip-name="${trip.tripName}">Book Now</button>
                </div>`;
            TourCards.append(tourCard);
        });

        // Add click event listener for the "Book Now" button
        $(".book-now-button").on("click", function() {
            const tripName = $(this).data("trip-name");
            window.location.href = `bookForm.html?trip=${tripName}`;
        });
    }
});


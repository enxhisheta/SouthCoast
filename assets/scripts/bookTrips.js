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
                        <p>TripName: ${trip.tripName}</p>
                        <p>MeetingPoint: ${trip.meetingPoint}</p>
                        <p>WeVisit: ${trip.weVisit}</p>
                        <p>Departure: ${trip.departure}</p>
                        <p>Price: ${trip.price}</p>
                        <button class="book-now-button" href="bookForm.html?trip=${trip.tripName}">Book Now</button>
                    </div>
                </div>`;
            TourCards.append(tourCard);
        });
    }
});

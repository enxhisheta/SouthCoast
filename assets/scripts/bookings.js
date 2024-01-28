$(document).ready(function () {
    var bookings = [];

    const settings = {
        async: true,
        crossDomain: true,
        url: 'http://localhost:5112/api/Bookings/',
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    };

    $.ajax(settings).done(function (_bookings) {
        // Call a function to update the bookings on the bookings.js page
        bookings = _bookings;
        console.log('bookings = ', bookings);
        createBookingCard();
    });

    const bookingsContainer = $("#bookingsContainer");
    bookingsContainer.empty();

    // Function to create booking cards
    function createBookingCard() {
        $.each(bookings, function(index, booking){
                const bookingCard = `
                <div class="booking-card">
                    <p>Name: ${booking.name}</p>
                    <p>Surname: ${booking.surname}</p>
                    <p>Date: ${booking.bookingDate}</p>
                    <p>Selected trip: ${booking.tripName}</p>
                    <p>Departure Time: ${booking.departureTime}</p>
                    <p>Email: ${booking.emailAddress}</p>
                    <p>Phone number: ${booking.phoneNumber}</p>
                    <p>Number of adults: ${booking.numberOfAdults}</p>
                    <p>Number of kids: ${booking.numberOfKids}</p>
                    <button class="delete-booking" data-booking-id="${index}">Delete Booking</button>
                </div>`;
                bookingsContainer.append(bookingCard);
            });
    }

    // Function to update the view after deleting a booking
       function updateView() {
          console.log("updateView called");
          bookingsContainer.empty();
          createBookingCard();
    }

    $(bookingsContainer).on('click', ".delete-booking", function () {
        const bookingId = $(this).data('booking-id');
        console.log("bookingId = ", bookingId);

        // Make a DELETE request to the backend API to delete the booking
        const deleteSettings = {
            async: true,
            crossDomain: true,
            url: `http://localhost:5112/api/Bookings/${bookingId}`,
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        };

        $.ajax(deleteSettings).done(function () {
            alert('Booking deleted successfully!');
            console.log("Before updateView");
            location.reload();
            updateView(); // Update the view after successful deletion
            console.log("after updateView");
        });
    });
});


    
/*
    // Event listener for delete button
    bookingsContainer.on('click', '.delete-booking', function() {
        const bookingIndex = $(this).data('id');
        bookings.splice(bookingIndex, 1);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        updateView();
    }); */
